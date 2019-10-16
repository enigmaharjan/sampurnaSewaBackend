exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('booking');
    return await knex.schema.createTable('booking', table=>{
        table.increments('bookid');
        table.string('jobname');
        table.string('jobtime');
        table.string('jobdate');
        table.string('jobproblem');
        table.string('userid');
    })
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('booking')
  
};