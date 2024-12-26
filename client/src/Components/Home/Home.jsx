import React, { useState } from "react";

const Home = () => {
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
      <h1 className="text-3xl font-bold text-blue-600 mb-6">To-Do Application</h1>

      {/* Input Section */}
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="w-full max-w-md">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white px-4 py-2 rounded-md shadow-sm mb-2"
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks yet!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
