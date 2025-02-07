// External Module..........
const express = require('express')
// Import the hendlers on routing request..........name export............
const {handleGetAllUsers, handleGetUsersById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require ("../controllers/userLogin")

// Create a host router...
const hostRouter = express.Router();


// get the handler promisess and set the routing same adress............
hostRouter.route('/').get(handleGetAllUsers).post(handleCreateNewUser)
hostRouter.route("/:id").get(handleGetUsersById).patch(handleUpdateUserById).delete(handleDeleteUserById)


module.exports = hostRouter;