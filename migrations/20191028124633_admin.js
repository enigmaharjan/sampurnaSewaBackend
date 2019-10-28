const bcrypt = require('bcrypt')
const password = bcrypt.hashSync('admin', 10);
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable('admin');
  return await knex.schema.createTable('admin', tbl =>{
      tbl.increments();
      tbl.string('email');
      tbl.string('password');
  }).then(function(){
      return knex('admin').insert({
          'email':'admin@admin.com',
          'password':password,
      })
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('admin');
  
};