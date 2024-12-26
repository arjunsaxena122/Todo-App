import mongoose, { model, Schema,  } from "mongoose"

const blackListedTokenSchema = new Schema(
    {
        token:{
            type:String,
            required:true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 3600 // 1 hr in seconds
        }
    }, 
    {
        timestamps: true
    }
)

export const blackListedToken = model("blackListedToken",blackListedTokenSchema)