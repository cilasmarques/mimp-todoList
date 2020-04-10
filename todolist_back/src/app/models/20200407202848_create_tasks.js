exports.up = function(knex) {
    return knex.schema.createTable('tasks', function(table) {
        table.increments();
        table.string('text').notNullable();
        table.boolean('complete').notNullable();
        table.string('user_id').notNullable();

        table.foreign('user_id').references('email').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
};
