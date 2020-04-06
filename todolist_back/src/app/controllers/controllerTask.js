const express = require('express');
const router = express.Router();

const User = require('../model/user');

const AuthMiddleware = require('../middlewares/auth');

/**
 * verifica se o user esta autorizado a entrar 
 */
router.use(AuthMiddleware);

/**
 * Adiciona uma task ao usuario
 */
router.post('/addTask', async (req, res) => {
    const { email, task } = req.body;

    try {
        let user = await User.findOne({ email });
        user.tasks.push(task);
        let updateTask = user.tasks;
        await User.updateOne ({ email }, { tasks: updateTask });

        res.json(user);

    } catch {
        res.status(400).send({ error: 'Cannot save task'});
    }
});

/**
 * Remove uma task ao usuario
 */
router.delete('/removeTask', async (req, res) => {
    const { email, taskIndex } = req.body;

    try {
        let user = await User.findOne({ email });
        let updateTask = user.tasks;

        if (taskIndex > -1) { updateTask.splice(taskIndex, 1); }

        await User.updateOne ({ email }, { tasks: updateTask });

        res.json(user.tasks);

    } catch {
        res.status(400).send({ error: 'Cannot remove task'});
    }
});

/**
 * Retorna as tarefas do usuario
 */
router.get('/getTasks/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id);

        if (user) res.json(user.tasks);
    
    } catch {
        res.status(500).send({ error: "Cannot get the user's tasks" });
    }
});

module.exports = (app) => app.use('/auth/task', router);