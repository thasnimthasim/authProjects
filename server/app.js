import express from 'express'
import dotenv from 'dotenv'
import './config/db.js'
import cors from 'cors'
import session from 'express-session'

import userRouter from './routes/userRoutes.js'

dotenv.config()


const app =express()
const PORT =process.env.PORT

const corsOptions = {
      origin:"http://localhost:5173",
      method: "*",
      credentials: true,
      allowedHeader: "Content-Type, Authorization"

}


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session({
          secret: "secret",
          resave: false,
          saveUninitialized:true,
          cookie: {secure: false}
}))

// app.options('*', cors())
app.use(cors(corsOptions))
app.use('/',userRouter)

app.listen(PORT,()=>{
  console.log(`listening ${PORT}`)
  
})