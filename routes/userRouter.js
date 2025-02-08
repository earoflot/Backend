// External Module..........
const express = require('express')
// Local Module........
const {handleGetAllNotifs,handleGetAllCrrnotifs} = require("../controllers/notifsHandler")
const {handleGetAllShopping} = require("../controllers/shoppingHandler")
const {handleGetAllJob} = require("../controllers/jobHandler")
const {handleGetAllHome} = require("../controllers/homeHandler")
const {handleGetAllGame} = require ("../controllers/gameHandler")

// Router.......Create a userRouter...........
const userRouter = express.Router();


// Create a home routing handler
userRouter.get('/home',handleGetAllHome)
// Create a Shopping routing hndler
userRouter.get('/shopping',handleGetAllShopping)
// Create a Job routing handler
userRouter.get('/job',handleGetAllJob)
// Create a Notification handler
userRouter.get('/notification',handleGetAllNotifs)
// Create a Current Notification handler
userRouter.get('/currentnotifs',handleGetAllCrrnotifs)
// Create a Game Routing Handler......
userRouter.get('/game',handleGetAllGame)





// Export userRouter......Module........
module.exports = userRouter;