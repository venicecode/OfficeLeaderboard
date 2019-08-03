const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const port = process.env.PORT;

// routes
const authRouter = require('./routes/authRoute.js');
const gamesRouter = require('./routes/gamesRoute.js');
const usersRouter = require('./routes/usersRoute.js');
const scoresRouter = require('./routes/scoresRoute.js');


app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.get('/api/games', gamesRouter);
app.get('/api/users', usersRouter);
app.post('/api/scores', scoresRouter);

app.use((err, req, res, next) => {

  return res.status(500).send(err);
})
app.listen(port, (err) => {
  if (err) console.error('error when connecting to port', err);
  else console.log('connected on port', port);
})