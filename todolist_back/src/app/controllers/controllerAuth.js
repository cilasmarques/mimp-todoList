const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const authConfig = require('../../config/auth.json');
const mailer = require('../../modules/mailer')

const User = require('../model/user');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

/**
 * Registra um usuario nao cadastrado
 */
router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            res.status(400).send({ error: 'User already exists'});

        const user = await User.create(req.body);
        user.password = undefined;

        return res.send({ user });

    } catch {
        res.status(400).send({ error: 'Registration failed'});
    }
});

/**
 * Autentica o usuario e gera o token
 */
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        res.status(400).send({ error: 'User Not Found'});

    if (!await bcrypt.compare(password, user.password))
        res.status(400).send({ error: 'Invalid Pasword'});

    user.password = undefined;

    res.send({ user, token: generateToken({ id: user.id })});
});

/**
 * Gera token e envia email para alteracao da senha 
 */
router.post('/forgot_password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user)
            res.status(400).send({ error: 'User Not Found'});
    
        const token = crypto.randomBytes(20).toString('hex');

        const tokenLife = new Date();
        tokenLife.setHours(tokenLife.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: tokenLife
            }
        });

        mailer.sendMail({
            to: email,
            from: 'cilas.marques@ccc.ufcg.edu.br',
            template: 'forgot_password',
            context: { token }
        }, (err) => {
            if (err) 
                return res.status(400).send({ error: 'Cannot send forgot password email' });

            return res.send();
        })

    } catch (err) {
        res.status(400).send({ error: 'Error on forgot password, try again' });
    }
});

/**
 * Altera a senha
 */
router.post('/reset_password', async (req, res) => {
    const { email, token, password } = req.body;

    try {
        const user = await User.findOne({ email }).select('+passwordResetToken passwordResetExpires');

        if (!user)
            res.status(400).send({ error: 'User Not Found'});

        if (token !== user.passwordResetToken)
            res.status(400).send({ error: 'Token invalid'});

        const now = new Date();
        if (now > user.passwordResetExpires)
            res.status(400).send({ error: 'Token expired'});

        user.password = password;

        await user.save();

        res.send();

    } catch (err) {
    res.status(400).send({ error: 'Error on reset password, try again' });
}
    
})

module.exports = (app) => app.use('/auth', router);