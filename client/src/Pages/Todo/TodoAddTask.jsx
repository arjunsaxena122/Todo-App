import React, { useState } from "react";
import { createTask } from "../../http";
import toast from "react-hot-toast";

function TodoAddTask() {
  const [todo, setTodo] = useState([]);
  const [todoInput, setTodoInput] = useState({
    title: "",
    task: "",
  });

  const addTodoTask = async() => {
    let res = await createTask(todoInput)
    if(res.data.statusCode === 201){
      toast.success(res.data.message)
    }
    console.log(res,res.data.statusCode,res)
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if (todoInput.title !== "" && todoInput.task !== "") {
      addTodoTask()
      setTodo((prev) => [...prev, todoInput]);
      setTodoInput({ title: "", task: "" });
    }
    else{
      toast.error("All field are required")
    }
  };


  return (
    <>
      <form className="grid grid-cols-3 gap-4" onSubmit={handleAddTask}>
        {/* Title Input */}
        <input
          type="text"
          value={todoInput.title}
          onChange={(e) =>
            setTodoInput((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="Enter title"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Task Input */}
        <input
          type="text"
          value={todoInput.task}
          onChange={(e) =>
            setTodoInput((prev) => ({ ...prev, task: e.target.value }))
          }
          placeholder="Enter task details..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Add Task Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>

    </>
  );
}

export default TodoAddTask;
