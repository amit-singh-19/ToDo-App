import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../Controllers/todoController.js";
import authentication from "../middlewares/auth.js";

const router = express.Router();

router.get("/", authentication, getTodos);
router.post("/", authentication, createTodo);
router.patch("/:id", authentication, updateTodo);
router.delete("/:id", authentication, deleteTodo);

export default router;
