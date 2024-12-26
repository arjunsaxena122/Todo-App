import mongoose from "mongoose";
import DB_NAME from "../constant.js"

const connectDB = async () =>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("MongoDB Connection Successfully Done",connectInstance.connection.host)
        
    } catch (error) {
        console.log("MongoDB connection Failed",error.message)
    }
}

export default connectDB