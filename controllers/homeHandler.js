const home = require("../homeData.json")


async function handleGetAllHome (req,res){
  return res.json(home.homeItems);
}

module.exports = {handleGetAllHome}