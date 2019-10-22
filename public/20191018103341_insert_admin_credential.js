const bcrypt = require('bcrypt');
const password = 'admin';
const hashedPassword=bcrypt.hashSync(password,10);

exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('admin');
    return await knex.schema.insertTable('admin', table=>{
        table.values('admin@admin.com',hashedPassword);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin')
};

