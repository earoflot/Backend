// External Module.......
// import mongose database module............
const mongoose = require("mongoose");

//............................IMPORT STYTMENTS........................

// Create a Data Base Schema............
const crrnotiSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  }
},{timestamps:true})

// // Create a new module userLongin Data Base Model.....
const crrnotiModel = mongoose.model("crr_notifs",crrnotiSchema );
// export moudle..........
module.exports =  crrnotiModel;