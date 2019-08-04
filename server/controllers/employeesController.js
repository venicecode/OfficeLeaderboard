const employeesController = {};

employeesController.getInfo = (req,res,next) => {
    const userSearchTerm = req.params.userid;
    console.log("Here is the userID we are looking for in the DB: ",userSearchTerm);
    //search the DB for the userID (an asynchronus request)
    //.then
        //if we can't find the userID throw an error
        //else return the info in the response body
    res.send({avatar: "avatar", games: "games", username: "name"})
    next();
},

employeesController.addGame = () => {

}

module.exports = employeesController;