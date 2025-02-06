// Import Core Module in filesystem............
const fs = require('fs')

// External Module
const express = require('express')
// Local Module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
// Import Mongo DB Data base import external module
const mongoose = require("mongoose");

const app = express();


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