import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout/HomeLayout";
import ErrorPage from "./Components/Error/ErrorPage";
import Register from "./features/Register/Register";
import Login from "./features/Login/Login";
import { Toaster } from "react-hot-toast";
import Todo from "./Pages/Todo/Todo";
import ProtectedRoutes from "./Components/ProtectedRoutes";
// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";

function App() {
  // const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<ProtectedRoutes><Todo /></ProtectedRoutes>} />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return (
    // <QueryClientProvider client={queryClient}>

    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
    // </QueryClientProvider>;
  );
}

export default App;
