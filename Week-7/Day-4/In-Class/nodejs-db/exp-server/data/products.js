const knex = require('knex')
const dotenv = require('dotenv');
dotenv.config();

const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    }
  });

  module.exports = {
    db
  }