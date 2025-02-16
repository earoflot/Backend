// Import Core Module in filesystem............
const fs = require('fs')
const path = require("path")
// External Module
const express = require('express')
// // Local Module Router import Module..............
// Host Module...........
const staticRouter = require('./routes/staticRouter');
const hostRouter = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');
// Name Export module
// Import DataBase connection on mongodb module
const { connectMongoDb } = require('./connection');
// Import Middleware Module in name export
const {logReqRes} = require("./middleware/index");
const { default: mongoose } = require('mongoose');


//.................................IMPORT MODULE.................................

// Crate a server app in express
const app = express();

// Connection ON MONGO DB 
// connectMongoDb("mongodb+srv://maniquare:E9mdXNWnfUkMEuBo@maniquare.6wfvh.mongodb.net/?retryWrites=true&w=majority&appName=maniQuare").then(() => console.log("Mongodb Connected"))

connectMongoDb("mongodb://127.0.0.1:27017/").then(() => console.log("Mongodb Connected"))

// app.set("view engine","ejs")
// app.set('views',path.resolve("./views"))

// Middleware -- Plugin........
// it is the log file and add the run time data..on the file
app.use(express.urlencoded({ extended: false}));
app.use(express.json())
app.use(logReqRes("log.txt"))

// Router use of host address initialise..........
// host address .api.......
// app.use("/",staticRouter);

app.use("/host",hostRouter);
// user address api
app.use("/api/user/",userRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
});