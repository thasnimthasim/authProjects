import mongoose from 'mongoose'

//setup mongoose connection

 mongoose.connect("mongodb://127.0.0.1:27017/project")
.then(()=>
{
  console.log("mongodb connected")
  
})

.catch((err)=>{
  console.log("some error occured",err);
})

