import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/userRoutes.js";
import todoRouter from "./Routes/todoRoutes.js";

//Configurations
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(express.json());

//DataBase Connection
mongoose
  .connect("mongodb://localhost:27017/TodoDB")
  .then(() => {
    console.log("Connected to DB...");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/users", userRouter);
app.use("/api/todo", todoRouter);
