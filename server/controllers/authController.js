const bcrypt = require('bcrypt');
const pool = require('../db/db.js');
const jwt = require('jsonwebtoken');

const SALTROUNDS = 10;
const authController = {};

// check to make sure the user puts in valid inputs on front-end
authController.validateUserInput = (req, res, next) => {
  console.log('validating user input');
  console.log('req.body: ', req.body)
  let {username, password} = req.body;
  username = username.trim();
  password = password.trim();
  const errors = {};
  if (!username) errors.username = 'You must provide a username';
  if (!password) errors.password = 'You must provide a password';
  if (password.length < 6)errors.passwordLength = 'Your password must be longer than 6 characters';
  if (Object.entries(errors).length === 0) return next();
  return res.status(400).json(errors);
}

// check to see if the jwt has laready been signed
authController.isSigned = (req, res, next) => {
  console.log('checking if user is Signed');
  const {username, password} = req.body;
  // if the token is empty continue onto the next piece of middleware (either signup or login)
  if (!req.cookies.token) return next();
  // otherwise verify the token in the req body, using the jwt_key from the .env file
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.status(500).json({err})
    if (decoded) {
      // if the decoded token comes back exit out of the req and sendback the req
      return res.status(200).json({isSigned: true, user: {username}});
    }
    return next();
  })
}

// set info for userid and username when 

// auth logic to create a new user
authController.signUp = (req, res) => {
  console.log('trying to sign up user');
  const pw = req.body.password;
  const un = req.body.username;
  bcrypt.hash(pw, SALTROUNDS, function(err, hash) {
    if (err) return res.status(500).json({err: 'there was an error is querying the database: ' + err});
      // query to insert into employees
      const insertEmployeesText = `INSERT INTO employees(username, password, officeid) VALUES($1, $2, $3) RETURNING *`;
      // parameters to insert into placeholders
      const insertEmployeesParams = [un, hash, 1];
      //connects to the client
      pool.connect();
      // query to find if a user with the username exists already
      pool.query('select * from employees where username = $1', [un], (err, result) => {
        if (err) return res.status(500).json({err: 'there was an error is querying the database: ' + err});
        if (result.rowCount.length > 0) return res.status(400).json({user: req.body});
      })
      // query to insert a new employee
      pool.query(insertEmployeesText, insertEmployeesParams, (err, result) => {
        if (err) return res.status(500).json({err: 'there was an error is querying the database: ' + err});
        const payload = {
          success: true,
          user: {username: result.rows[0].username, id: result.rows[0]._id}
        }
        // sign the jwt with the payload, jwt_key, specify the algo, and expiration time
        jwt.sign(payload, process.env.JWT_KEY, { algorithm: 'HS256', expiresIn: '1 day'}, (err, token) => {
          // end the pool connection to db
          pool.end();
          // return info about the user including the username, id, and token
          res.cookie('token', token, {httpOnly: true});
          return res.status(200).json({user: {username: result.rows[0].username, id: result.rows[0]._id}, isSigned: true});
        });
      });
  });
}

// logic to check whether user credentials match password on file
authController.login = (req, res) => {
  console.log('trying to login user');
  const un = req.body.username;
  const pw = req.body.password;
  // compare hashed password with password put into Login.js component
  const findEmployeeQuery = 'select * from employees where username = $1'
  const findEmployeesParams = [un];
  // connect to the pool
  pool.connect()
  // query to find an employee that matches the username
  pool.query(findEmployeeQuery, findEmployeesParams, (err, result) => {
    if (err) return res.status(500).json({err: 'there was an error is querying the database: ' + err});
    console.log(result);
    if (result.rowCount > 0) {
  
    // use bcrypt to compare password passed in through req and pw on file
    bcrypt.compare(pw, result.rows[0].password, function(err, same) {
    if (err) return res.status(500).json({err: 'there was an error is querying the database: ' + err});
    if (same) {
      // if pws match sign the jwt
      const payload = {
        success: true,
        user: {username: result.rows[0].username, id: result.rows[0]._id}
      }
      jwt.sign(payload, process.env.JWT_KEY, { algorithm: 'HS256', expiresIn: '1 day'}, (err, token) => {
        res.cookie('token', token, {httpOnly: true});
        return res.status(200).json({user:{username: result.rows[0].username, id: result.rows[0]._id}, token: token, isSigned: true});
      });
    }
    else {
      return res.status(400).json({err: 'That password does not match the one on file'})
    }
  });
}
else {
  return res.status(400).json({err: 'That username is not on file'})
}

  });

  
}
module.exports = authController;