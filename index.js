// External Module
const express = require('express')
// Local Module
const userRouter = require('./routes/userRouter');
const mongoose = require("mongoose");


const app = express();





// Get a list Notification ;
app.use(userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
});