import Api_Error from "../utils/Api_Error.js";
import Api_Response from "../utils/Api_Response.js";
import { Todo } from "../model/todo.model.js";

export const createTask = async (req, res) => {
  try {
    const { title, task } = req.body;
    const createdByUser = req.user._id;

    if (!title || !task) {
      throw new Api_Error(400, "All fields are required");
    }

    const createdTodo = await Todo.create({ title, task, createdByUser });

    if (!createdTodo) {
      throw new Api_Error(500, "Internal Server Error");
    }

    const populateTodo = await Todo.findById(createdTodo._id).populate({
      path: "createdByUser",
      select: "-password -refreshToken",
    });

    return res
      .status(201)
      .json(new Api_Response(201, "Task Created Successfully"));
  } catch (error) {
    console.log(error.message);
  }
};

export const getTask = async (req, res) => {
  try {
    const id = await Todo.find({ createdByUser: req.user._id }).select(
      "title task isCompleted"
    );

    if (!id) {
      throw new Api_Error(400, "we couldn't find the User");
    }

    return res
      .status(200)
      .json(new Api_Response(200, "Todo data fetched successfully", id));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;

  console.log(id);

  if (!id) {
    throw new Api_Error(400, "Deleted User id doesn't provided");
  }

  try {
    const deleteTask = await Todo.findByIdAndDelete(id);

    if (!deleteTask) {
      throw new Api_Error(400, "Delete todo doesn't found");
    }

    return res
      .status(200)
      .json(new Api_Response(200, "Task Deleted Successfully"));
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTask = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    throw Api_Error(400, "Deleted User id doesn't provided");
  }

  try {
    const { title, task, isCompleted } = req.body;

    console.log(title,task , isCompleted)

    if (!title || !task || !isCompleted) {
      new Api_Response(200, "Everything is up-to-date");
    }

    const updatedTask = await Todo.findByIdAndUpdate(
      id,
      { title, task, isCompleted },
      { new: true, runValidators: false }
    );

    if (!updatedTask) {
      throw new Api_Error(400, "updated todo doesn't found");
    }

    return res
      .status(200)
      .json(new Api_Response(200, "Task successfully updated", updatedTask));
  } catch (error) {
    console.log(error.message);
  }
};
