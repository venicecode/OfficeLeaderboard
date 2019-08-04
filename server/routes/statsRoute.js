const statsRouter = require('express').Router();

// controllers
const statsController = require('../controllers/statsController.js');

statsRouter.get('/:office/:game',
    statsController.getLeaderBoard,
    (req,res) => {res.status(200)}
)

// authRouter.post('/signup', authController.createUser);

module.exports = statsRouter;