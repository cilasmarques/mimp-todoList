const express = require('express');
const router = express.Router();

const ServiceTask = require('../services/serviceTask');
const AuthMiddleware = require('../middlewares/auth');

/**
 * verifica se o user esta autorizado a entrar 
 */
router.use(AuthMiddleware);

/**
 * Adiciona uma task ao usuario
 */
router.post('/addTask', async (req, res) => {
    try {
        ServiceTask.addTask(req, res);
    } catch {
        res.status(500).send({ error: 'Add task failed'});
    }
});

/**
 * Retorna as tarefas do usuario
 */
router.get('/getTasks/:userId', async (req, res) => {
    try {
        ServiceTask.getTask(req, res);
    } catch {
        res.status(500).send({ error: 'Get task failed'});
    }

});

/**
 * Atualiza uma task ao usuario
 */
router.put('/updateTask', async (req, res) => {
    try {
        ServiceTask.updateTask(req, res);
    } catch {
        res.status(500).send({ error: 'Update task failed'});
    }
});

/**
 * Remove uma task ao usuario
 */
router.delete('/removeTask', async (req, res) => {
    try {
        ServiceTask.removeTask(req, res);
    } catch {
        res.status(500).send({ error: 'Remove task failed'});
    }
});

module.exports = (app) => app.use('/auth/task', router);