import React from 'react'

function TodoAddTask({task , addTask}) {
  return (
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
  )
}

export default TodoAddTask
