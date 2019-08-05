const employeesRouter = require('express').Router();

// controllers
const employeesController = require('../controllers/employeesController.js');

employeesRouter.get('/:userid', 
    //retrive employee information for the user's sideBar
    employeesController.getInfo,
    (req,res) => {res.status(200)}
); 
// authRouter.post('/signup', authController.createUser);

module.exports = employeesRouter;