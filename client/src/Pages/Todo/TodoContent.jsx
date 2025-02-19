import React from "react";
import TodoAddTask from "./TodoAddTask";
import TodoHeader from "./TodoHeader";

function TodoContent() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <TodoHeader />
      
      {/* Input Section */}
      <TodoAddTask />
    </div>
  );
}

export default TodoContent;
