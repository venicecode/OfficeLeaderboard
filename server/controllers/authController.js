const bcrypt = require('bcrypt');
const pool = require('../db/db.js');
const jwt = require('jsonwebtoken');
// const fs = require('fs');

const SALTROUNDS = 10;
const authController = {};
// const options = {
//   key: fs.readFileSync('./csr.pem', 'utf8'),
//   cert: fs.readFileSync('./server.crt', 'utf8')
// };
// callback required to extract the jwt 

// check if jwt is signed (checks whether the client received a jwt)
// go directly to dashboard if true
authController.isSigned = (req, res, next) => {
  if (!req.cookies.token) return next()
  // console.log(req.cookies);
  // jwt.verify(req.cookies.token, process.env.SECRET, (err, decoded) => {
  //   if (err) return res.status(400).json({err: 'user is not logged in'})
  //   console.log(decoded);
  //   // res.status(200).
  // })
}

// set info for userid and username when 

// auth logic to create a new user
authController.signUp = (req, res) => {
  const pw = req.body.password;
  const un = req.body.username;
  console.log(req.body);
  bcrypt.hash(pw, SALTROUNDS, function(err, hash) {
    if (err) console.log(err);
      // res.status(500).json('there was an error creating the password: ' + err)
      console.log(hash);

      // query to insert into employees
      const insertEmployeesText = `INSERT INTO employees(username, password, officeid) VALUES($1, $2, $3) RETURNING *`;
      // parameters to insert into placeholders
      const insertEmployeesParams = [un, hash, 1];
      //connects to the client
      pool.connect();
      pool.query('select username from employees where username = $1', [un], (err, result) => {
        if (err) return res.status(500).json({err: 'there was an error is querying the database: ' + err});
        if (result.rowCount.length > 0) return res.send('a user already exists');
      })
      // queries w/ callback
      pool.query(insertEmployeesText, insertEmployeesParams, (err, result) => {
        if (err) return res.status(500).json({err: 'there was an error is querying the database: ' + err});
        console.log('result of adding a new employee: ', result);
        const payload = {
          success: true,
          user: result.rows[0]
        }
        jwt.sign(payload, process.env.JWT_KEY, { algorithm: 'HS256', expiresIn: '1 day'}, (err, token) => {
          pool.end();
          return res.status(200).json({isSigned: true, token: token});
        });
      });
  });
}

// logic to check whether user credentials match password on file
authController.login = (req, res) => {
  const un = req.body.username;
  const pw = req.body.password;
  // compare hashed password with password put into Login.js component
  const findEmployeeQuery = 'select username, password from employees where username = $1'
  const findEmployeesParams = [un];

  pool.connect()
  // queries w/ callback
  pool.query(findEmployeeQuery, findEmployeesParams, (err, result) => {
    if (err) res.status(500).json({err: 'there was an error is querying the database: ' + err});
    console.log(result);
    // use bcrypt to compare 
    bcrypt.compare(pw, result.rows[0].password, function(err, same) {
    if (err) res.status(500).json({err: 'there was an error is querying the database: ' + err});
    if (same) {
      console.log('passwords match');
      const payload = {
        success: true,
        user: result.rows[0].username
      }
      jwt.sign(payload, process.env.JWT_KEY, { algorithm: 'HS256', expiresIn: '1 day'}, (err, token) => {
        return res.status(200).json({isSigned: true, token: token});
      });
    }
    else {
      return res.status(400).json({isSigned: false, err: 'That username is not on file'})
    }
  });
  });

  
}
module.exports = authController;