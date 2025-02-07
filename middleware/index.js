// Core Module..........
const fs = require('fs')


function logReqRes (filename){
  return (req,res,next) => {
     fs.appendFile(filename,`\nDate:${new Date().toLocaleString()},\tIp:${req.ip},\tRequest:${req.method},\tPath:${req.path}`,(err,data)=>{
        next()
      })
  }
}

module.exports = {
  logReqRes,
}