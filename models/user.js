// const { json } = require("express");
const mongoose = require("mongoose");

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
},{timestamps:true})
// // Data Base Model.....
const userLogin = mongoose.model("users",userSchema );

module.exports =  userLogin;