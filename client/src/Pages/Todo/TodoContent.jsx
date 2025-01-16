import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoAddTask from "./TodoAddTask";
import TodoDelTask from "./TodoDelTask";

function TodoContent() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(""); // Clear input field
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <TodoHeader/>

      {/* Input Section */}
      <TodoAddTask task = {task} addTask={addTask}/>

      {/* Task List */}
      <TodoDelTask tasks = {tasks} removeTask={removeTask}/>
    </div>
  );
}

export default TodoContent;
