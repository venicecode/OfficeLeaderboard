const authRouter = require('express').Router();

// controllers
const authController = require('../controllers/authController.js');

authRouter.post('/signup', authController.createUser);

module.exports = authRouter;