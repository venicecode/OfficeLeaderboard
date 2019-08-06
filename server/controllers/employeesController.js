const employeesController = {};
const pool = require('../db/db.js');

//Given a userid return the avatar and username 
employeesController.getInfo = (req,res,next) => {
    const userSearchTerm = req.params.userid;
    console.log("Here is the userID we are looking for in the DB: ",userSearchTerm);
    let data = {}; 
    //create the empty object that will capture the response from the database
    //search the DB for the userID (an asynchronus request)
    pool.query('SELECT username, imgurl FROM employees WHERE _id = $1', [userSearchTerm])
    .then(result => {
      console.log(result.rows);
      data = result.rows[0];
      res.locals.data = {avatar: data.imgurl, username: data.username};
      next();
    })
    .catch(e=>next(e));
        //return the info in the response body
    // old fake response res.send({avatar: "avatar", username: "name"})
},

employeesController.addGame = () => {

}

module.exports = employeesController;