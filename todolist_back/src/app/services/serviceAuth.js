const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const authConfig = require('../../config/auth.json');
const mailer = require('../../resources/mail/mailer');
const dbTable = require('../../database/connection');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

const ServiceAuth = { 

    async register (req, res) {
        const { email, name, password } = req.body;

        const user = await dbTable('users').where('email', email).first();

        if (!user) {
            await dbTable('users').insert({ email, name, password });
            res.status(201).send();
        } else 
            res.status(400).send({ error: 'User Already Exists'});
    },

    //---------------------------------------------------

    async login (req, res) {
        const { email, password } = req.body;

        const user = await dbTable('users').where('email', email).first();

        if (!user)
            res.status(400).send({ error: 'User Not Found'});

    //  if (!await bcrypt.compare(password, user.password))
        if( password !== user.password)
            res.status(400).send({ error: 'Invalid Pasword'});

        res.status(200).send({ user, token: generateToken({ id: user.email })});
    },

    //---------------------------------------------------

    async forgotPassword (req, res) {
        const { email } = req.body;

        const user = await dbTable('users').where('email', email).first();

        if (!user)
            res.status(400).send({ error: 'User Not Found'});
    
        const token = crypto.randomBytes(20).toString('hex');

        const tokenLife = new Date();
        tokenLife.setHours(tokenLife.getHours() + 1);

        await dbTable('users').where('email', email).update({
            passwordResetToken: token,
            passwordResetExpires: tokenLife
        });

        mailer.sendMail({
            to: email,
            from: 'cilas.marques@ccc.ufcg.edu.br',
            template: 'forgot_password',
            context: { token }
        }, (err) => {
            if (err) 
                return res.status(500).send({ error: 'Fail on send forgot password email' });

            return res.status(200).send();
        });
    },

    //---------------------------------------------------

    async resetPassword (req, res) {
        const { email, token, password } = req.body;

        const user = await dbTable('users').where('email', email).first();

        if (!user)
            res.status(400).send({ error: 'User Not Found'});

        if (token !== user.passwordResetToken)
            res.status(401).send({ error: 'Token invalid'});

        const now = new Date();
        if (now > user.passwordResetExpires)
            res.status(401).send({ error: 'Token expired'});

        await dbTable('users').where('email', email).update({
            password: password,
            passwordResetToken: null,
            passwordResetExpires: null
        });
    
        res.status(200).send();
    }
}

module.exports = ServiceAuth;