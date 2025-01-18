// External Module..........
const express = require('express')
// Local Module........
const notification = require("../NotificationData.json")
const shopping = require("../ShoppingData.json")
const job = require("../JobData.json")

const userRouter = express.Router();

userRouter.get('/user/api/shopping',(req,res,next)=>{
  
  console.log(req.url,req.method)
  return res.json(shopping.ShoppingItems);
})

userRouter.get('/user/api/job'),(req,res,next)=>{
  console.log(req.url,req.method)
  return res.json(job.JobIems);
}

userRouter.get('/user/api/notification',(req,res,next)=>{
  
  console.log(req.url,req.method)
  return res.json(notification.notificationsItems);
})

module.exports = userRouter;