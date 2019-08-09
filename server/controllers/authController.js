const authController = {};

// check to make sure the user puts in valid inputs on front-end
authController.validateUserInput = (req, res, next) => {
  console.log('VALIDATE USER INPUT');
  // console.log("req.body: ", req.body);
  let { username, password } = req.body;
  // console.log('req.body.username: ', username);
  // console.log('req.body.password: ', password);
  username = username.trim();
  password = password.trim();
  const errors = {};
  if (!username) errors.username = "You must provide a username";
  if (!password) errors.password = "You must provide a password";
  if (password.length < 6)
    errors.passwordLength = "Your password must be longer than 6 characters";
  if (Object.entries(errors).length === 0) {
    return next();
  } else {
    console.log("there was an error in validating");
    return res.status(400).json(errors);
  }
};

// check to see if the jwt has laready been signed
authController.isSigned = (req, res, next) => {
  console.log('IS SIGNED');
  const { username } = req.body;
  // if the token is empty continue onto the next piece of middleware (either signup or login)
  if (!req.cookies.token) return next();
  // otherwise verify the token in the req body, using the jwt_key from the .env file
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, decoded) => {
    if (decoded) {
      return res
        .status(200)
        .json({ isSigned: true, user: { username, id: req.cookies.id } });
    } else {
      return next();
    }
  });
};

// set info for userid and username when

// auth logic to create a new user
authController.signUp = (req, res) => {
  console.log('SIGN UP');
  const pw = req.body.password;
  const un = req.body.username;
  // console.log('check');
  // console.log(un);
  // console.log(pw);
  // console.log('check');
  bcrypt.hash(pw, SALTROUNDS, function(err, hash) {
    if (err)
      return res
        .status(501)
        .json({ err: "there was an error is querying the database: " + err });
    //connects to the client
    pool.connect();
    // query to find if a user with the username exists already
    pool.query(
      "select * from employees where name = $1",
      [un],
      (err, result) => {
        if (err) {
          console.log(`error in the signUp query`);
          return res.status(502).json({
            err: "there was an error is querying the database: " + err
          });
        }
        if (result.rowCount.length > 0) {
          console.log(`user has been found in the signup query`);
          return res.status(400).json({ user: req.body });
        }
      }
    );
    const insertEmployeesText = `INSERT INTO employees(name, userpass, office) VALUES($1, $2, $3) RETURNING *`;
    // parameters to insert into placeholders
    const insertEmployeesParams = [un, hash, 1];
    console.log(insertEmployeesParams);
    // query to insert a new employee
    pool.query(insertEmployeesText, insertEmployeesParams, (err, result) => {
      if (err)
        return res
          .status(503)
          .json({ err: "there was an error is querying the database: " + err });
      const payload = {
        success: true,
        user: { username: result.rows[0].username, id: result.rows[0]._id }
      };
      // sign the jwt with the payload, jwt_key, specify the algo, and expiration time
      jwt.sign(
        payload,
        process.env.JWT_KEY,
        { algorithm: "HS256", expiresIn: "1 day" },
        (err, token) => {
          // end the pool connection to db
          pool.end();
          // return info about the user including the username, id, and token
          res.cookie("token", token, { httpOnly: true });
          res.cookie("id", result.rows[0]._id);
          return res.status(200).json({
            user: {
              username: result.rows[0].username,
              id: result.rows[0]._id
            },
            isSigned: true
          });
        }
      );
    });
  });
};

// logic to check whether user credentials match password on file
authController.login = (req, res) => {
  console.log('LOG IN');
};

// logic to check whether user credentials match password on file
authController.login = (req, res) => {
  console.log('LOG IN');
  const un = req.body.username;
  const pw = req.body.password;
  // compare hashed password with password put into Login.js component
  const findEmployeeQuery = "select * from employees where username = $1";
  const findEmployeesParams = [un];
  // connect to the pool
  console.log("***connecting");
  pool.connect();
  console.log("***connected");
  // query to find an employee that matches the username
  pool.query(findEmployeeQuery, findEmployeesParams, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(504)
        .json({ err: "there was an error is querying the database: " + err });
    }
    console.log(result);
    if (result.rowCount > 0) {
      // use bcrypt to compare password passed in through req and pw on file
      bcrypt.compare(pw, result.rows[0].password, function(err, same) {
        if (err)
          return res.status(505).json({
            err: "there was an error is querying the database: " + err
          });
        if (same) {
          // if pws match sign the jwt
          const payload = {
            success: true,
            user: { username: result.rows[0].username, id: result.rows[0]._id }
          };
          jwt.sign(
            payload,
            process.env.JWT_KEY,
            { algorithm: "HS256", expiresIn: "1 day" },
            (err, token) => {
              pool.end();
              res.cookie("token", token, { httpOnly: true });
              res.cookie("id", result.rows[0]._id);
              return res.status(200).json({
                user: {
                  username: result.rows[0].username,
                  id: result.rows[0]._id
                },
              ],
            }
);

// logic to check whether user credentials match password on file
authController.login = (req, res) => {
};
module.exports = authController;
