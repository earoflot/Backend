const notification = require("../NotificationData.json")
const currentnotifs = require("../CurrentnotifsData.json")


async function handleGetAllNotifs(req,res){
  return res.json(notification.notificationsItems);
};

async function handleGetAllCrrnotifs(req,res){
  return res.json(currentnotifs.currentnotifsItems);
}





module.exports = { handleGetAllNotifs,handleGetAllCrrnotifs};