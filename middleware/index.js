// Core Module..........
const fs = require('fs')
//..............................IMPORT STYTMENT...................... 

// Create a log file.txt and add the data  on the run time.............log the we can hit user website on the run time
function logReqRes (filename){
  return (req,res,next) => {
     fs.appendFile(filename,`\nDate:${new Date().toLocaleString()},\tIp:${req.ip},\tRequest:${req.method},\tPath:${req.path}`,(err,data)=>{
        next()
      })
  }
}
// export module................
module.exports = {
  logReqRes,
}