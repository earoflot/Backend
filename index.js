// Import Core Module in filesystem............
const fs = require('fs')

// External Module
const express = require('express')

// // Local Module
const userRouter = require('./routes/userRouter');
// Name Export module
const hostRouter = require('./routes/hostRouter');

const { connectMongoDb } = require('./connection');


const {logReqRes} = require("./middleware/index")
// Import Mongo DB Data base import external module


const app = express();

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/loginUser").then(() => console.log("Mongodb Connected!"))

// Middleware -- Plugin........
app.use(express.urlencoded({ extended: false}));
app.use(logReqRes("log.txt"))

// Get a list Notification ;
app.use("/host",hostRouter);
app.use(userRouter)


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
});