// External Module..........
const express = require('express')
// Local Module........
const notification = require("../NotificationData.json")

const userRouter = express.Router();


userRouter.get('/user/api/notification',(req,res,next)=>{
  
  console.log(req.url,req.method)
  return res.json(notification);

  

})

module.exports = userRouter;