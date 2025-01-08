import React from "react";
import { useTodoContext } from "../Store";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useTodoContext();
  return isAuthenticated ? children  : <Navigate to={"/"} />;
}

export default ProtectedRoutes;
