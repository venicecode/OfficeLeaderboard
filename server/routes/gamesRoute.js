const gamesRouter = require('express').Router();

// controllers
const gamesController = require('../controllers/gamesController.js');

gamesRouter.get('/:office', 
    //retritve the games info for a specific office
    gamesController.getGames,
    (req,res) => {res.status(200)}
) 

gamesRouter.post('/:office/:gamename/:userid',
    //creating a new game and putting the user in the ladder of the new game 
    gamesController.newGame,
    (req,res) => {res.status(200)}
)
// authRouter.post('/signup', authController.createUser);

module.exports = gamesRouter;