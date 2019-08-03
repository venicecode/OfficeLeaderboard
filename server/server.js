const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const port = process.env.PORT;

// routes
const authRouter = require('./routes/authRoute.js');

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {

  return res.status(500).send(err);
})
app.listen(port, (err) => {
  if (err) console.error('error when connecting to port', err);
  else console.log('connected on port', port);
})