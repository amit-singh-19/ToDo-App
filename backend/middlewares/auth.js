import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../Models/userModel.js";

dotenv.config();
const { SECRET_KEY } = process.env;

const authentication = async (req, res, next) => {
  try {
    const header = req.headers.authentication;
    if (!header) {
      res.status(400).json({ message: "Not authorized, token failed" });
    }
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);

    // We attach the user object to the request, excluding the password
    req.user = await userModel.findById(decoded._id).select("-password");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Something went wrong" });
  }
};

export default authentication;
