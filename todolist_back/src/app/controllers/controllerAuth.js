const express = require('express');
const ServiceAuth = require('../services/serviceAuth');

const router = express.Router();

/**
 * Registra um usuario nao cadastrado
 */
router.post('/register', async (req, res) => {
    try {
        ServiceAuth.register(req, res);
    } catch {
        res.status(500).send({ error: 'Registration failed'});
    }
});

/**
 * Autentica o usuario e gera o token
 */
router.post('/login', async (req, res) => {
    try {
        ServiceAuth.login(req, res);
    } catch {
        res.status(500).send({ error: 'Login failed'});
    }
});

/**
 * Gera token e envia email para alteracao da senha 
 */
router.post('/forgot_password', async (req, res) => {
    try {
        ServiceAuth.forgotPassword(req, res);
    } catch {
        res.status(500).send({ error: 'Forgot password failed' });
    }
});

/**
 * Altera a senha do usuario
 */
router.post('/reset_password', async (req, res) => {
    try {
        ServiceAuth.resetPassword(req, res);
    } catch {
        res.status(500).send({ error: 'Reset password failed' });
    }
});

module.exports = (app) => app.use('/auth', router);