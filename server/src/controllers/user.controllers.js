import Api_Error from "../utils/Api_Error.js";
import { User } from "../model/user.model.js";
import Api_Response from "../utils/Api_Response.js";
import jwt from "jsonwebtoken";
import { blackListedToken } from "../model/blackListedToken.js";

async function isGeneratedAccessAndRefreshToken(_id) {
  try {
    const user = await User.findById(_id);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Api_Error(
      500,
      "Something went wrong while generating access and refresh token"
    );
  }
}

export async function userSignup(req, res) {
  const { username, email, password } = req.body;

  if ([username, email, password].some((field) => field?.trim() === "")) {
    throw new Api_Error(400, "All field are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new Api_Error(400, "Already registered");
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  const createUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createUser) {
    // using for the fetch user data
    throw new Api_Error(500, "Something went wrong while registering the user");
  }

  return res
    .status(200)
    .json(new Api_Response(201, createUser, "Registered Successfully"));
}

export async function userLogin(req, res) {
  const { email, password } = req.body;

  if ([email, password].some((field) => field?.trim() === "")) {
    throw new Api_Error(400, "Email and Password are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Api_Error(404, "Email doesn't exist");
  }

  const isPassword = await user.isPasswordCorrect(password);

  if (!isPassword) {
    throw new Api_Error(401, "Invalid Password");
  }

  const { accessToken, refreshToken } = await isGeneratedAccessAndRefreshToken(
    user._id
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
      new Api_Response(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
}

export async function userLogout(req, res) {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const token = req.cookies.accessToken
  const isBlackList = await blackListedToken.create({token})

  console.log("isBlack from userController", isBlackList)

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new Api_Response(200, {}, "Logged Out Successfully"));
}

export async function newRefreshAndAccessToken(req, res) {
  const incomingRefreshToken =
    req?.cookies?.refreshToken || req?.body?.refreshToken;

  if (!incomingRefreshToken) {
    throw new Api_Error(401, "unauthorized request");
  }

  try {
    const decodeToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );


    const user = await User.findById(decodeToken?._id);

    if (!user) {
      throw new Api_Error(401, "Invalid refresh token");
    }


    if (incomingRefreshToken !== user?.refreshToken) {
      throw new Api_Error(401, "Refresh token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, refreshToken } =
      await isGeneratedAccessAndRefreshToken(user?._id);


    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new Api_Response(
          200,
          { accessToken, refreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new Api_Error(401, error.message || "Invalid refresh token");
  }
}
