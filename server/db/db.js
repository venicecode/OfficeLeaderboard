const pg = require('pg');
const conString = process.env.POSTGRES_URL;
const client = new pg.Client(conString);

module.exports = client;
