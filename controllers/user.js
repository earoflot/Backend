const userLogin = require("../models/user")



async function handleGetAllUsers(req,res){
  const allDBlogin = await userLogin.find({})
  return res.json(allDBlogin)
};
async function handleGetUsersById(req,res){
   // Dynamic Path Parameters :id -> Variable | Dynamic
 const userId = await userLogin.findById(req.params.id)
 // if check the condition on userId not match then can be apply for this methods
 //Client error responses (400 -- 499)
 if(!userId)return res.status(404).json({erro: "User not found"})
 return res.json(userId)
}

async function handleUpdateUserById(req,res){
   // Edit the user on with ID 
  //
  await userLogin.findByIdAndUpdate(req.params.id,{lastName: "Changed"})
  return res.json({status: "Success Update"})
}

async function handleDeleteUserById(req,res){
  await userLogin.findByIdAndDelete(req.params.id)
  return res.json({status: "Success Delete "})
}
async function handleCreateNewUser(req,res){
  // Create new user
  const body = req.body
  // check it conditions on the post request and appy for this status code....................
  // Client error responses (400 -- 499)
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender){
    return res.status(400).json({msg: "All fields are req...."})
  }
  // Successful responses Created (200 -- 299)
  // 201 Created the request succeeded and a new resource was created as a result.this is typically the response sent after POST request or some PUT request....
  const userLog = await userLogin.create({
    firstName: body.first_name, 
    lastName: body.last_name ,
    email: body.email ,
    gender: body.gender,
  })
  return res.status(201).json({msg: "Success"})
}
module.exports = {
  handleGetAllUsers,
  handleGetUsersById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
  
}