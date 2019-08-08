const statsRouter = require('express').Router();

// controllers
const statsController = require('../controllers/statsController.js');

statsRouter.get('/:office/:game',
    statsController.getLeaderBoard,
    (req,res) => {res.status(200)}
)

//vvvv planning to refactor with new scoring system vvvv
statsRouter.post('/:game/:userid/',
    //when you send this post request you have to send "up" or "down" in the request body
    //to rank the user up or down
    statsController.moveUser,
    (req,res) => {res.status(200)}
)
// authRouter.post('/signup', authController.createUser);

module.exports = statsRouter;