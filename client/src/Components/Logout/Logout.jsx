import React, { useState } from "react";
import { logoutUserData } from "../../http";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useTodoContext } from "../../Store";
import Loading from "../Loading/Loading";

function Logout() {
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useTodoContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const res = await logoutUserData();
      toast.success(res?.data?.message);
      logout();
      localStorage.removeItem("token")
      navigate("/")
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  if(isLoading) return <Loading/>

  return  <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
