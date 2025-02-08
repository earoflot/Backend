// External Module.......
// import mongose database module............
const mongoose = require("mongoose");

//............................IMPORT STYTMENTS........................

// Create a Data Base Schema............
const olnotiSchema = new mongoose.Schema({
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
const olnotiModel = mongoose.model("old_notifs",olnotiSchema );
// export moudle..........
module.exports =  olnotiModel;