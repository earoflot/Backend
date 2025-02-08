const shopping = require("../ShoppingData.json")


async function handleGetAllShopping(req,res){
// Create a custum headers............
  // Always add X to Custom headers..........
  res.setHeader("X-Name","manisQaure");
  return res.json(shopping.ShoppingItems);
};

module.exports = {handleGetAllShopping}