const usersRouter = require('express').Router();

// controllers
const usersController = require('../controllers/usersController.js');
usersRouter.get('/', (req,res) => {
    res.status(200)
    res.send('Hello, you have reached the users route.')
    }
) 
// authRouter.post('/signup', authController.createUser);

module.exports = usersRouter;