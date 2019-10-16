exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('booking');
    return await knex.schema.alterTable('booking', table=>{
        table.string('confirmation');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('booking')
};
