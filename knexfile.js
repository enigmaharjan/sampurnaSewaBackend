const path = require('path');
module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'sampurnasewa',
    password: 'agile',
    database: 'sampurnasewa_db'
  },
  migrations: {
    tableName: 'migrations',
    directory: path.resolve(__dirname, './migrations'),
  },
  useNullAsDefault: false
};