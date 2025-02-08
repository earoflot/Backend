const job = require("../JobData.json")


async function handleGetAllJob(req,res){
  return res.json(job.JobIems);
}

module.exports = { handleGetAllJob,}

