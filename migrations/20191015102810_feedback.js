exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('feedback');
    return await knex.schema.createTable('feedback', table=>{
        table.increments('feedid');
        table.string('feedback');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('feedback')
};