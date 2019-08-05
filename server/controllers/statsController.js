const statsController = {};
const pool = require('../db/db.js');

//Given an office and a game, return an array of user's and their rank. 
statsController.getLeaderBoard = (req,res,next) => {
    const officeHostingGame = req.params.office;
    const gameAtThisOffice = req.params.game;
    console.log("Searching in the following office: ", officeHostingGame);
    console.log("Searching stats for the following game in the DB: ", gameAtThisOffice);
    let data = []; 
     //create the empty object that will capture the response from the database
    //search the DB for all of the usernames and thier ranks (asynch)
    pool.query(`SELECT offices.name as officelocation, games.name as gamename, employees.username, employees.imgurl, stats.rank from games join stats on games._id = gameid join employees on usernameid = employees._id join offices on games.officeid = offices._id where gameid = $1 order by rank asc;`,[gameAtThisOffice])
    .then(result => {
        console.log(result.rows);
        data = result.rows;
        //return the info in the response, the game ids for this office
        res.json(data);
        })
    // res.send({Username1: "Vance", Rank1: "1", Username2: "Alex", Rank2: "2", Username3: "Tang", Rank3: "3"})
}

statsController.moveUser = (req,res,next) => {
    const gameToChange = req.params.game;
    const userToMove = req.params.userid;
    const rankDirection = req.body.rank;
    let data = {};
    console.log("Changing the following game: ", gameToChange);
    console.log("We are going to rank this user: ", userToMove);
    console.log("In this way: ", rankDirection);
    //in req.body.rank you can specify "up", "down" or "last"
    //req.body.rank "last" indicates that the user just joined the game so we want to add them to the bottom of the ladder
    //not sure how we will do this........
    res.send({NewLeaderBoard: "someLeaderBoardArr"}) 
};

module.exports = statsController;