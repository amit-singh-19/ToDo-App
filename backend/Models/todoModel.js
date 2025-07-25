import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    text: { type: String, require: true },
    isCompleted: { type: Boolean, default: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.Model("Todo", todoSchema);
