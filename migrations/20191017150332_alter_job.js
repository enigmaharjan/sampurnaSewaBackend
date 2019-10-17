exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('jobs');
    return await knex.schema.alterTable('jobs', table=>{
        table.string('availability');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('jobs')
};