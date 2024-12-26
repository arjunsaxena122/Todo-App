import React from "react";
import { Link } from "react-router-dom"; // Make sure you're using React Router for navigation

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Something went wrong. The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
