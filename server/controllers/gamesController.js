
const gamesController = {};
const pool = require('../db/db.js');

gamesController.getGames = (req,res,next) => {
    const officeSearchTerm = req.params.office;
    console.log("Here is the office we are searching for in the DB: ",officeSearchTerm);
         //create the empty array that will capture the response from the database
    let data = []; 

    //search the DB for the correct Office (an asynchronus request) 
    pool.query('SELECT _id as gameid, name FROM games WHERE officeid = $1 order by name asc', [officeSearchTerm])
        .then(result => {
        console.log(result.rows);
        data = result.rows;
        //return the info in the response
        res.json(data);
        })
    .catch(e=>next(e));
   
    //fake data response 
    //res.send({Game1: "Game_One", Game2: "Game_Two", Game3: "Game_Three"})
};

gamesController.newGame = (req,res,next) => {
    const newGameName = req.params.gamename;
    const officeToUpdate = req.params.office;
    const creatorsUserId = req.params.userid;
    let data = [];
    console.log("We're going to create a game with the name of: ", newGameName);
    console.log("In this office: ", officeToUpdate);
    console.log("We'll put the following user at the last rank of the game: ", creatorsUserId);
    //write the game to the DB
    pool.query('INSERT INTO games(name, officeid) VALUES($1, $2) RETURNING *', [newGameName, officeToUpdate])
    .then(result => {
      console.log(result.rows);
      console.log("Inserted a new game into games called: ", newGameName);
      data = result.rows;
      res.send(data);
    //   const gameid = result.rows[0]._id;
    //     pool.query('INSERT INTO stats(usernameid, gameid, rank) VALUES($1, $2, 1) RETURNING *', [creatorsUserId, gameid, 1])
    //         .then(result => {
    //             console.log("Inserted to the stats of the newly created game: ", creatorsUserId);
    //         })
    //         .catch(e=>next(e));  
    })
    .catch(e=>next(e));
    //put the user at the bottom of the game once it is created.
    //res.send({Game1: "Game_One", Game2: "Game_Two", Game3: "Game_Three", Game4: "Game_Four"})
};

module.exports = gamesController;