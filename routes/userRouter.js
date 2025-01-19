// External Module..........
const express = require('express')
// Local Module........
const notification = require("../NotificationData.json")
const currentnotifs = require("../CurrentnotifsData.json")
const shopping = require("../ShoppingData.json")
const job = require("../JobData.json")
const home = require("../homeData.json")

const userRouter = express.Router();

console.log(home)

userRouter.get('/user/api/shopping',(req,res,next)=>{
  
  console.log(req.url,req.method)
  return res.json(shopping.ShoppingItems);
})

userRouter.get('/user/api/job',(req,res,next)=>{
  
  console.log(req.url,req.method)
  return res.json(job.JobIems);
})
userRouter.get('/user/api/home',(req,res,next)=>{
  
  console.log(req.url,req.method)
  return res.json(home.homeItems);
})


userRouter.get('/user/api/notification',(req,res,next)=>{
  
  console.log(req.url,req.method)
  return res.json(notification.notificationsItems);
})
userRouter.get('/user/api/currentnotifs',(req,res,next)=>{
  
  console.log(req.url,req.method)
  return res.json(currentnotifs.currentnotifsItems);
})

module.exports = userRouter;