
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

module.exports = gamesController;