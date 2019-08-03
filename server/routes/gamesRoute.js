const gamesRouter = require('express').Router();

// controllers
const gamesController = require('../controllers/gamesController.js');
gamesRouter.get('/', (req,res) => {
    res.status(200).send('Hello, you have reached the games route.');
    }
) 
// authRouter.post('/signup', authController.createUser);

module.exports = gamesRouter;