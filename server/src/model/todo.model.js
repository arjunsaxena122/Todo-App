import  { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    task: {
      type: String,
      default: "",
      trim: true,
    },
    createdByUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = model("Todo", todoSchema);
// Model is function not constructor