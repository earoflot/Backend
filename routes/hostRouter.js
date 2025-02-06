// External Module..........
const express = require('express')

const userData = require("../MOCK_DATA.json");
const fs = require("fs");



const hostRouter = express.Router();



// USERS ROUTERS..............
hostRouter.get('/api/host',(req,res,next) => {
  // List all users JSON - Done
  //
  return res.json(userData)
})
hostRouter.route("/api/host/:id").get((req,res) => {
  // Dynamic Path Parameters :id -> Variable | Dynamic
  //
  const id = Number(req.params.id);
  const userId = userData.find((user) => user.id === id);
  return res.json(userId)
}).patch((req,res) => {
  // Edit the user with ID 
  //
  return res.json({status: "Pending"})
}).delete((req,res) => {
  // Delete the user with ID
  //
  return res.json({status: "Pending"})
})
hostRouter.post('/api/host',(req,res) => {
  // Create new user
  //
  const body = req.body;
  console.log(body)
  userData.push(body);
  fs.writeFile("../MOCK_DATA.json",JOSON.stringify(userData),(err,data)=>{
    return res.json({status: "Pending"})
  })
  
  
})

module.exports = hostRouter;