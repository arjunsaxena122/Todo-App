import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export const registerUserData = (data) => {
  return api.post("/user/signup", data, { withCredentials: true });
};

export const loginUserData = (data) => {
  return api.post("/user/login", data, { withCredentials: true });
};

export const logoutUserData = () => {
  return api.patch("/user/logout", { withCredentials: true });
};


export const checkUserAuth = () =>{ return api.get("/user/check-auth", { withCredentials: true })}