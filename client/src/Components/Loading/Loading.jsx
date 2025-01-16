import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-800 w-full h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
