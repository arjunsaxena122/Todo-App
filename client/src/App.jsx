import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout/HomeLayout";
import ErrorPage from "./Components/Error/ErrorPage";
import About from "./Pages/About/About";
import Register from "./features/Register/Register";
import Login from "./features/Login/Login";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  // const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return (
    // <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    // </QueryClientProvider>;
  );
}

export default App;
