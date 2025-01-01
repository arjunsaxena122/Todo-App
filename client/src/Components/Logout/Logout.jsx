import React from "react";
import { logoutUserData } from "../../http";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout({ setIsAuthenticated }) {

  const navigate = useNavigate()

  const handleLogout = async () => {
   try {
    const res = await logoutUserData();
    toast.success(res.data.message)
    setIsAuthenticated(false);
    navigate("/")
   } catch (error) {
    toast.error(error.response.data.message)
   }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
