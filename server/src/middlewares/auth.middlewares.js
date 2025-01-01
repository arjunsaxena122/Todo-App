import { blackListedToken } from "../model/blackListedToken.js";
import { User } from "../model/user.model.js";
import Api_Error from "../utils/Api_Error.js";
import jwt from "jsonwebtoken";

export async function verifyJwt(req, _, next) {
  try {
    const token =
      req?.cookies.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Api_Error(401, "Unauthorized request");
    }

    const isBlackListedToken = await blackListedToken.findOne({token})
    
    if(isBlackListedToken){
      throw new Api_Error(401, "Invalid Token");
    }

    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodeToken._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new Api_Error(401, "Access Token doesn't exist");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new Api_Error(401, "Invalid access token" || error.message);
  }
}
