import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export const registerUserData = (data) => {
  api.post("/user/register", data, { withCredentials: true });
};

export const loginUserData = (data) => {
  api.post("/user/login", data, { withCredentials: true });
};

export const logoutUserData = () => {
  api.get("/user/logout", { withCredentials: true });
};
