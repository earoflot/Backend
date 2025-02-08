const game = require("../FFgameData.json")

async function handleGetAllGame(req,res){
  return res.json(game.gameItems);
}

module.exports = {handleGetAllGame}