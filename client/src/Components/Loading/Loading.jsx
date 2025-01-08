import React from "react";

function Loading() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen w-full h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default Loading;
