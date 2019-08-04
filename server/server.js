const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const port = process.env.PORT;

// routes
const authRouter = require('./routes/authRoute.js');
const gamesRouter = require('./routes/gamesRoute.js');
const employeesRouter = require('./routes/employeesRoute.js');
const statsRouter = require('./routes/statsRoute.js');

//handle parsing
app.use(bodyParser.json());
app.use(cookieParser());

// route handlers
app.use('/api/auth', authRouter);
app.use('/api/games', gamesRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/stats', statsRouter);

app.use((err, req, res, next) => {
  return res.status(500).send(err);
})

//catch all for unknown routes
app.use((req,res) => res.sendStatus(404));

app.listen(port, (err) => {
  if (err) console.error('error when connecting to port', err);
  else console.log('connected on port', port);
})