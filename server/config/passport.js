const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const pool = require('../db/db.js');
const key = process.env.JWT_KEY;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key;

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    pool.connect()
    pool.query('select * from employees where password = $1', [jwt_payload.id], (err, result) => {
      if (result.rows.length > 0) {
        return done(null, result.rows[0]);
      }
      return done(null,false);
    })
  }))
}