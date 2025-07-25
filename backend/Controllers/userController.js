import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../Models/userModel.js";

dotenv.config();
const { SECRET_KEY } = process.env;

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await userModel.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already Exists" });

    const hashedPass = await bcrypt.hash(password, 10);
    const userObj = {
      name,
      email,
      password: hashedPass,
    };
    const result = await userModel.create(userObj);
    res.status(201).json({ message: "User register successfully", result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (isMatch) {
        const userObj = {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
        };
        const token = jwt.sign(userObj, SECRET_KEY, { expiresIn: "1h" });
        res.status(200).json({ token, userObj });
      } else {
        res.status(401).json({ message: "Incorrect Password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

export { registerUser, loginUser };
