const authRouter = require('express').Router();

// controllers
const authController = require('../controllers/authController.js');

authRouter.post('/signup', 
authController.validateUserInput, 
authController.isSigned, 
authController.signUp);
authRouter.post('/login', 
authController.validateUserInput, 
authController.isSigned, 
authController.login);

module.exports = authRouter;