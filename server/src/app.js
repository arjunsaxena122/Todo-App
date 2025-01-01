import express, { json, urlencoded } from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// middleware
app.use(json({limit:true}))
app.use(urlencoded({extended:true,limit:true}))
app.use(cookieParser())
const corsOptions = {
    origin: "http://localhost:5173",
    methods:["GET","PUT","PATCH","DELETE","POST"],
    credentials:true
  };
app.use(cors(corsOptions))


// Import Routes
import userRouter from "./routes/user.routes.js"
import todoRouter from "./routes/todo.routes.js"
import Api_Error from './utils/Api_Error.js'

app.use('/api/v1/user',userRouter)
app.use('/api/v1/todo',todoRouter)


// Centralized error handling

app.use((err,req,res,next)=>{
    if(err instanceof Api_Error){
        return res.status(err.statusCode).json({message:err.message})
    }

    res.status(500).json({message:"Internal Server Error"})
})

export default app