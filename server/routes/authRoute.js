const authRouter = require('express').Router();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
const ExtractJwt = require('passport-jwt').ExtractJwt;
// controllers
const authController = require('../controllers/authController.js');

authRouter.post('/signup', authController.isSigned, authController.signUp);
authRouter.post('/login', authController.isSigned, authController.login);

module.exports = authRouter;