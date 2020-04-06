const express = require('express');
const router = express.Router();

const User = require('../model/user');
const AuthMiddleware = require('../middlewares/auth');

/**
 * verifica se o user esta autorizado a entrar 
 */
router.use(AuthMiddleware);

router.get('/hasPermition', (req, res) => {
    res.send({ ok: true, user: req.userId });
});

/**
 * Retorna um usuario expecifico
 */
router.get('/getUser', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) res.json(user);

    } catch {
        res.status(500).send({ error: 'Cannot return the user' });
    }
});

/**
 * Retorna todos os usuarios
 */
router.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.find({});

        if (users) res.json(users);

    } catch {
        res.status(500).send({ error: 'Cannot return all users' });
    }
});

module.exports = (app) => app.use('/auth/user', router);