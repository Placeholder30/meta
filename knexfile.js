// Update with your config settings.
require('dotenv').config();

module.exports = {
  client: 'postgresql',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    ssl: { rejectUnauthorized: false },
  },

  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/migrations',
  },
  seeds: {
    directory: './src/seeds',
  },
};
