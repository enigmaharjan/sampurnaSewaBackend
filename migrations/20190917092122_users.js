exports.up =async function(knex, Promise) {
    await knex.schema.hasTable('users');
    return await knex.schema.createTable('users', table=>{
        table.increments('userid');
        table.string('name');
        table.string('username');
        table.string('email').unique();
        table.string('password');
        table.string('address');
        table.string('phone');
        table.string('imagename');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
