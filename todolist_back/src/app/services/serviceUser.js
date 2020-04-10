const dbTable = require('../../database/connection')

const ServiceUser = { 

    async getUser (req, res) {
        const { email } = req.body;

        const user = await dbTable('users').where('email', email).first();

        if (user) 
            res.status(200).json(user);
        else
            res.status(400).send({ error: 'User Not Found'});
    },

    async getAllUsers (req, res) {
        const users = await dbTable('users');

        if (users) 
            res.status(200).json(users);
        else
            res.status(400).send({ error: 'No users Found'});
    },

    async deleteUser (req, res) {
        const { email } = req.body;

        const user = await dbTable('users').where('email', email).first();

        if (user) {
            await dbTable('users').where('email', email).delete();
            res.status(200).send();
        } else 
            res.status(400).send({ error: 'User Not Found'});
    }
}

module.exports = ServiceUser;