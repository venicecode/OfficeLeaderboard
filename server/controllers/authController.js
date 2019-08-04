const bcrypt = require('bcrypt');
const pool = require('../db/db.js');
const jwt = require('jsonwebtoken');

const SALTROUNDS = 10;
const authController = {};
// callback required to extract the jwt 

// check if jwt is signed (checks whether the client received a jwt)
// go directly to dashboard if true
authController.isSigned = (req, res, next) => {
  // if (!req.cookies.token) return next()
  console.log(req.body);
  jwt.verify(req.cookies.token, process.env.SECRET, (err, decoded) => {
    if (err) res.send(400).json({err: 'user is not logged in'})
    console.log(decoded);
    // res.status(200).
  })
}

// auth logic to create a new user
authController.signUp = (req, res) => {
  const pw = req.body.password;
  const un = req.body.username;
  bcrypt.getSalt(SALTROUNDS, (err, salt) => {
    bcrypt.hash(pw, salt, (err, hash) => {
      if (err) res.status(500).json({err: 'there was an error creating the password'})
      // query to insert into employees
      const insertEmployeesText = `INSERT INTO employees(username, password, office) VALUES($1, $2, $3) RETURNING *`;
      // parameters to insert into placeholders
      const insertEmployeesParams = [un, hash, /*'someFKvalue to be changed*/]
      //connects to the client
      pool.connect()
      // queries w/ callback
      pool.query(insertEmployeesText, insertEmployeesParams, (err, result) => {
        if (err) res.status(500).json({err: 'there was an error is querying the database'});
        console.log(result);
        const privateKey = process.env.SECRET;
        const token = jwt.sign({cookieIsSigned: true}, privateKey, { algorithm: 'RS256', expiresIn: '1 day'});
        res.cookie({token});
        res.status(200).json({isSigned: true});
      });
    })
  })

}

// logic to check whether user credentials match password on file
authController.login = (req, res) => {
  const UN = req.body.username;
  const PW = req.body.password;
  // compare hashed password with password put into Login.js component
  bcrypt.compare(PW, hash/** queried hash goes here,*// function(err, result) {
    if (err) return res.status(400).json({error: 'password does not match password on file'});
    const privateKey = process.env.SECRET;
    const token = jwt.sign({isSigned: true}, privateKey, { algorithm: 'RS256', expiresIn: '1 day'});
    res.cookie({token})
    console.log(result);
    res.send(200).json({isSigned: true});
  });
}
module.exports = authController;