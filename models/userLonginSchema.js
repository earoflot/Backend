// External Module.......
// import mongose database module............
const mongoose = require("mongoose");

//............................IMPORT STYTMENTS........................

// Create a Data Base Schema............
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
// // Create a new module userLongin Data Base Model.....
const userLogin = mongoose.model("users",userSchema );
// export moudle..........
module.exports =  userLogin;