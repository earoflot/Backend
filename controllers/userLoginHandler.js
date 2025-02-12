// Local Module.......
// find the value of mogodb data........
const userLogin = require("../models/userLonginSchema")
//...............................IMPORT STYTMENT.........................
// HTTP RESPONSE STATUS CODES
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes.
//
// 1. Informational responses (100 -- 199)
// 2. Successful responses (200 -- 299)
// 3. Redirection messages (300 -- 399)
// 4. Client error responses (400 -- 499)
// 5. Server error respones (500 -- 599)

// USERS ROUTERS..............
// USERS ROUTERS..............

// Create a async fucntion on awite to find the data on useLogin database

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
// update the value of some changes on by id .........
async function handleUpdateUserById(req,res){
   // Edit the user on with ID 
  //
  await userLogin.findByIdAndUpdate(req.params.id,{lastName: "Changed"})
  return res.json({status: "Success Update"})//Some error
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
// export all async function............
module.exports = {
  handleGetAllUsers,
  handleGetUsersById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
  
}