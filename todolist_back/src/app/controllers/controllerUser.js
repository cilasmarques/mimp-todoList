const express = require('express');
const router = express.Router();

const ServiceUser = require('../services/serviceUser');
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
    try {
        ServiceUser.getUser(req, res);
    } catch {
        res.status(500).send({ error: 'Get user failed'});
    }
});

/**
 * Retorna todos os usuarios
 */
router.get('/getAllUsers', async (req, res) => {
    try {
        ServiceUser.getAllUsers(req, res);
    } catch {
        res.status(500).send({ error: 'Get all users failed'});
    }
});

/**
 * Delete um usuario
 */
router.delete('/deleteUser', async (req, res) => {
    try {
        ServiceUser.deleteUser(req, res);
    } catch {
        res.status(500).send({ error: 'Delete user failed'});
    }
});

module.exports = (app) => app.use('/auth/user', router);