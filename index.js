// Import Core Module in filesystem............
const fs = require('fs')

// External Module
const express = require('express')
// Local Module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
// Import Mongo DB Data base import external module
const mongoose = require("mongoose");
const { type } = require('os');

const app = express();

// Data Base Connection....
mongoose.connect("mongodb://127.0.0.1:27017/loginUser_db").then(()=> console.log("MongoDB Connected")).catch((err) => console.log("Mongo Erro",err))

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
const User = mongoose.model("user",userSchema);





// Middleware -- Plugin........
app.use(express.urlencoded({ extended: false}));
app.use(express.json({ extended: false}));

// Check the user Information in Middleware and create a Log file
app.use((req,res,next) => {
  fs.appendFile("log.txt",`\nDate:${new Date().toLocaleString()},\tIp:${req.ip},\tRequest:${req.method},\tPath:${req.path}`,(err,data)=>{
    next()
  })

})

// Get a list Notification ;
app.use(userRouter,hostRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
});