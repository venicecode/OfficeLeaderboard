
const gamesController = {};

gamesController.getGames = (req,res,next) => {
const officeSearchTerm = req.params.office;
console.log("Here is the office we are searching for in the DB: ",officeSearchTerm);
//search the DB for the correct Office (an asynchronus request)
//.then
    //if we can't find the office throw an error
    //else return the info in the response body
    res.send({Game1: "Game_One", Game2: "Game_Two", Game3: "Game_Three"})
}

gamesController.newGame = (req,res,next) => {
    const gameName = req.params.gameName;
    const office = req.params.office;
    const userid = req.params.userid;
    console.log("We're going to create a game with the name of: ", gameName);
    console.log("In this office: ", office);
    console.log("We'll put the following user at the last rank of the game: ", userid);
    //write the game to the DB

    //put the user at the bottom of the game once it is created.
    res.send({Game1: "Game_One", Game2: "Game_Two", Game3: "Game_Three", Game4: "Game_Four"})
}
module.exports = gamesController;