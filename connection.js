// Import External Module.........
const mongoose = require("mongoose");


// Connect the MongoDb to node js..................
async function connectMongoDb(url){
  // Data Base Connection....
return mongoose.connect(url)
}
// export 
module.exports = {
  connectMongoDb,
}