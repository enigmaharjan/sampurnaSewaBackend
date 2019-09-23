exports.up =async function(knex, Promise) {
    await knex.schema.hasTable('jobs');
    return await knex.schema.createTable('jobs', table=>{
        table.increments('jobid');
        table.string('jobname');
        table.string('jobdetail');
        table.string('minimumcharge');
        table.string('jobimage');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs')
};
