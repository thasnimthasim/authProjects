import UserModel from "../models/userModel.js"
import bcrypt from 'bcrypt'

export const handleRegistration = (req,res)=>{
  const {username,email,password} =req.body;

  UserModel.findOne({email})
    .then((existingUser)=>{
        if(existingUser){
          return res.status(403).json({error: "Email already exists"})
        }

        bcrypt.hash(password,10)
              .then((hashPassword)=>{
                  UserModel.create({username,email,password: hashPassword})
                    .then((newUser)=>{
                        res.status(200).json({message: "User registrationsuccess"})
                        req.session.userId =newUser._id;
                        console.log(req.session.userId)
                    })
                    .catch((error)=>{
                      res.status(500).json({error:"1Error handling in server"})
                        
                    })
                  })
              .catch((error)=>{
                res.status(500).json({error:"2Error handling in servers"})
              })
              })
        .catch(()=>{
                res.status(500).json({error:"3Error handling in servers"})
        })
}


export const handleLogin =(req,res)=>{
    const {email,password} =req.body
    UserModel.findOne({email})
      .then((user)=>{
        // console.log("user",user);
        
        if(!user){
          return res.status(401).json({error: "no user found with this email"})
        }

        bcrypt.compare(password,user.password)
          .then((isMatch)=>{
            if(!isMatch){
               return res.status(401).json({error: "incorrect password"})
            }
            req.session.userId =user.id;
            res.status(200).json({message:"Login successful"})
          })
          .catch((error)=>{
            res.status(500).json({error: "error connecting server"})
          })
      })
      .catch((error)=>{
        return res.status(401).json({error:"No user found with this email"})
      })
}

export const authChecking =(req,res)=>{
  if(req.session.userId){
    res.status(200).json({authenticated: true})
  }else{
    res.status(200).json({authenticated: false})
  }
  }


