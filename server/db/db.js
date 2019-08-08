/*
  require pg for postgres
  assume conString will be defined without requiring 'dotenv'
  the conString will be the login/password/database for elephantSQL

  pool will automatically disconnect you in 5-10 seconds instead of client keeping you connected indefinitely
  */

/* uncomment require('dotenv') to allow access to .env variables for local process i.e. 'node server/db/db.js' */
// require('dotenv').config();

const pg = require("pg");
const conString =
  "postgres://ffmdkgsy:JQHtGsZobgBeuiuzL-ntDumTgpkXUQ0g@raja.db.elephantsql.com:5432/ffmdkgsy";
const pool = new pg.Pool({ connectionString: conString });

/* uncomment this whole thing + require .env to initialize a your database with tables for this project */
// const fs = require('fs');
// const path = require('path');
// const dbinit = fs.readFileSync(path.resolve(__dirname, 'init_ol.sql')).toString();
// pool.query(dbinit)
// .then((res) => {
//   console.log(res);
//   pool.end();
// })
// .catch(err=>console.log(err))

pool
  .query("SELECT NOW()")
  .then(res => {
    console.log(res.rows);
    //pool.end(()=>console.log('Disconnected from pool'))
  })
  .catch(err => console.log(err));

module.exports = pool;
