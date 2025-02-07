
// External Module..........
const express = require('express')

const {handleGetAllUsers, handleGetUsersById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require ("../controllers/user")



// mongoose.connect("mongodb://127.0.0.1:27017/loginUser").then(()=> console.log("MongoDB Connected")).catch((err) => console.log("Mongo Erro",err))

const hostRouter = express.Router();

// HTTP RESPONSE STATUS CODES
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes.
//
// 1. Informational responses (100 -- 199)
// 2. Successful responses (200 -- 299)
// 3. Redirection messages (300 -- 399)
// 4. Client error responses (400 -- 499)
// 5. Server error respones (500 -- 599)

// USERS ROUTERS..............



// USERS ROUTERS..............
hostRouter.route('/').get(handleGetAllUsers).post(handleCreateNewUser)
hostRouter.route("/:id").get(handleGetUsersById).patch(handleUpdateUserById).delete(handleDeleteUserById)


module.exports = hostRouter;