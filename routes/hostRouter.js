// Core Module..........
const fs = require('fs')
// External Module..........
const express = require('express')
const mongoose = require("mongoose");

const { type } = require('os');
// Local Module........
const userData = require("../userData.json")




// Data Base Connection....
mongoose.connect("mongodb://127.0.0.1:27017/loginUser").then(()=> console.log("MongoDB Connected")).catch((err) => console.log("Mongo Erro",err))

// Data Base Schema..
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  }
})

// Data Base Model.....
const userLogin = mongoose.model("users",userSchema );



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
  // if check the condition on userId not match then can be apply for this methods
  //Client error responses (400 -- 499)
  if(!userId)return res.status(404).json({erro: "User not found"})
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
// POST  REQUEST.............
hostRouter.post('/api/host', async (req,res) => {
  // Create new user
  //
  const body = req.body
  // check it conditions on the post request and appy for this status code....................
  // Client error responses (400 -- 499)
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender){
    return res.status(400).json({msg: "All fields are req...."})
  }
  // userData.push({ ...body, id: userData.length + 1 })
  // fs.writeFile("../Backend/userData.json",JSON.stringify(userData),(err,data)=>{
  //   // Successful responses Created (200 -- 299)
  //   return res.status(201).json({status: "Success",id: userData.length})
  // }) // 201 Created the request succeeded and a new resource was created as a result.this is typically the response sent after POST request or some PUT request....
  const userLog = await userLogin.create({
    firstName: body.first_name, 
    lastName: body.last_name ,
    email: body.email ,
    gender: body.gender,
  })
  console.log("LoginData",userLog)
  return res.status(201).json({msg: "Success"})
})

module.exports = hostRouter;