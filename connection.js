const mongoose = require("mongoose");

async function connectMongoDb(url){
  // Data Base Connection....

return mongoose.connect(url)
}

module.exports = {
  connectMongoDb,
}