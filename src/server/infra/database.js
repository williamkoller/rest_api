const pgp = require('pg-promise')();
const { envs } = require('../../config');

const db = pgp({
  user: envs.user,
  password: envs.password,
  port: Number(envs.port),
  host: envs.host,
  database: envs.database,
});

module.exports = db;
