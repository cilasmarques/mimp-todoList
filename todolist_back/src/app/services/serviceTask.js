const dbTable = require('../../database/connection');

const ServiceTask = { 

    async addTask (req, res) {
        const { email, text } = req.body;

        let task = await dbTable('tasks').insert({ text, complete: false, user_id: email });

        res.status(201).json(task);
    },

    //---------------------------------------------------

    async getTask (req, res) {
        let tasks = await dbTable('tasks').where('user_id', req.params.userId);
        res.status(200).json(tasks);    
    },

    //---------------------------------------------------

    async updateTask (req, res) {
        const { email, taskIndex } = req.body;

        let task = await dbTable('tasks').where({id: taskIndex, user_id: email}).first();

        await dbTable('tasks').where({id: taskIndex, user_id: email}).update({
            complete: !task.complete
        });
    
        let tasks = await dbTable('tasks').where('user_id', email);
        res.status(200).json(tasks);    
    },

    //---------------------------------------------------

    async removeTask (req, res) {
        const { email, taskIndex } = req.body;

        await dbTable('tasks').where({id: taskIndex, user_id: email}).delete();

        let tasks = await dbTable('tasks').where('user_id', email);
        res.status(200).json(tasks);
    }
}

module.exports = ServiceTask;