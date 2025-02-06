// External Module..........
const express = require('express')
// Local Module........
const notification = require("../NotificationData.json")
const currentnotifs = require("../CurrentnotifsData.json")
const shopping = require("../ShoppingData.json")
const job = require("../JobData.json")
const home = require("../homeData.json")
const game = require("../FFgameData.json")

const userData = require("../MOCK_DATA (1).json");

const userRouter = express.Router();

userRouter.get('/user/api/shopping',(req,res,next)=>{
  return res.json(shopping.ShoppingItems);
})
userRouter.get('/user/api/job',(req,res,next)=>{
  return res.json(job.JobIems);
})
userRouter.get('/user/api/home',(req,res,next)=>{
  return res.json(home.homeItems);
})
userRouter.get('/user/api/notification',(req,res,next)=>{
  return res.json(notification.notificationsItems);
})
userRouter.get('/user/api/currentnotifs',(req,res,next)=>{
  return res.json(currentnotifs.currentnotifsItems);
})
userRouter.get('/user/api/game',(req,res,next)=>{
  return res.json(game.gameItems);
})






module.exports = userRouter;