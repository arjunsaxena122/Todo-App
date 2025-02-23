import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Components/Error/ErrorPage";
import Loading from "./Components/Loading/Loading";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Login from "./features/Login/Login";
import Register from "./features/Register/Register";
import { checkUserAuth } from "./http";
import HomeLayout from "./Pages/HomeLayout/HomeLayout";
import Todo from "./Pages/Todo/Todo";
import TodoBoard from "./Pages/Todo/TodoBoard";
import { useTodoContext } from "./Store";

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
        <Route
          path="/todo"
          element={
            <ProtectedRoutes>
              <Todo />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/todo-board"
          element={
            <ProtectedRoutes>
              <TodoBoard />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  const { setIsAuthenticated } = useTodoContext();
  const [isLoading, setIsLoading] = useState(false);

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    setIsLoading(true);
    try {
      const res = await checkUserAuth();
      if (token && res.status === 200) {
        setIsAuthenticated(res.data.isAuthentication);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) return <Loading />;

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
