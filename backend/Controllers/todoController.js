import todoModel from "../Models/todoModel.js";

const getTodos = async (req, res) => {
  try {
    const todo = await todoModel.find({ userId: req.user.id });
    res.json(todo);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) return res.status(400).json({ message: "Text feild required" });

    const newTodo = {
      text,
      userId: req.user.id,
    };

    const result = await todoModel.create(newTodo);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await todoModel.findById(id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    // Check if the todo belongs to the logged-in user
    if (todo.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: "User not authorized" });
    }

    todo.isCompleted = !todo.isCompleted;
    const updateTodo = await todo.save();
    res.status(200).json(updateTodo);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await todoModel.findById(id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    if (todo.userId.toString() !== req.user.id)
      return res.status(401).json({ message: "User not authorized" });

    const result = await todoModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Todo Deleted Successfully", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo };
