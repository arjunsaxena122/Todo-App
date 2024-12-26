import app from "./app.js";
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path:'./.env'
})

connectDB()

app.listen(process.env.PORT || 3000,console.log(`Server running at port ${process.env.PORT}`))