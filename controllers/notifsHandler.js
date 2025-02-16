const notification = require("../NotificationData.json")
const currentnotifs = require("../CurrentnotifsData.json")

// const notifs = require("../models/notifsSchema")


async function handleGetAllNotifs(req,res){
  return res.json(notification.notificationsItems);
};
// async function handleGetAllNotifs(req,res){
//   const notification= await notifsUser.find({})
//   console.log(notification)
//   return res.json(notification)
// };
async function handleGetAllCrrnotifs(req,res){
  return res.json(currentnotifs.currentnotifsItems);
}





module.exports = { handleGetAllNotifs,handleGetAllCrrnotifs};