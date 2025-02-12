// External Module..........
const express = require('express')


// Create a host router...
const staticRouter = express.Router();


staticRouter.get("/",(req,res) => {
  return res.render("home")
})

module.exports = staticRouter;