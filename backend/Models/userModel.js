import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, minlength: 6, require: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
