import express from 'express';

const app = express();

app.get('/',(req,res)=>{
  res.send('Server is ready');
});

// Get a list Notification ;

app.get('/user/api/notification',(req,res,next)=>{
  const notification = [
    {
      id: 1,
      Title: "APPLY FOR AIRPORT JOB OF GROUND STAFF",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      id: 2,
      Title: "APPLY FOR AIRPORT JOB OF GROUND STAFF",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      id: 3,
      Title: "APPLY FOR AIRPORT JOB OF GROUND STAFF",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      id: 4,
      Title: "APPLY FOR AIRPORT JOB OF GROUND STAFF",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      id: 5,
      Title: "APPLY FOR AIRPORT JOB OF GROUND STAFF",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    
  ]
  console.log(req.url,req.method)
  res.send(notification);

  
  next()

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
});