// Import Core Module in filesystem............
const fs = require('fs')
// External Module
const express = require('express')
// // Local Module Router import Module..............
// Host Module...........
const hostRouter = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');
// Name Export module
// Import DataBase connection on mongodb module
const { connectMongoDb } = require('./connection');
// Import Middleware Module in name export
const {logReqRes} = require("./middleware/index")

//.................................IMPORT MODULE.................................

// Crate a server app in express
const app = express();

// Connection ON MONGO DB 
connectMongoDb("mongodb://127.0.0.1:27017/loginUser").then(() => console.log("Mongodb Connected!"))

// Middleware -- Plugin........
// it is the log file and add the run time data..on the file
app.use(express.urlencoded({ extended: false}));
app.use(express.json())
app.use(logReqRes("log.txt"))

// Router use of host address initialise..........
// host address .api.......
app.use("/host",hostRouter);
// user address api
app.use("/api/user/",userRouter)


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
});