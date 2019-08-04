const statsController = {};
statsController.getLeaderBoard = (req,res,next) => {
    const officeHostingGame = req.params.office;
    const gameAtThisOffice = req.params.game;
    console.log("Searching in the following office: ", officeHostingGame);
    console.log("Searching stats for the following game in the DB: ", gameAtThisOffice);
    //search the DB for all of the usernames and thier ranks (asynch)
    //.then
        //if we can't find the office throw an error
        //else return the info in the response body 
    res.send({Username1: "Vance", Rank1: "1", Username2: "Alex", Rank2: "2", Username3: "Tang", Rank3: "3"})
    next();
}

module.exports = statsController;