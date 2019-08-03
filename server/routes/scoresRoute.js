const scoresRouter = require('express').Router();

// controllers
const scoresController = require('../controllers/scoresController.js');
scoresRouter.post('/', (req,res) => {
    res.status(200)
    res.send('Hello, you have reached the scores route.')
    }
)
// authRouter.post('/signup', authController.createUser);

module.exports = scoresRouter;