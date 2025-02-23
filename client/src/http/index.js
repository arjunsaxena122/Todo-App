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
  return api.post("/user/signup", data);
};

export const loginUserData = (data) => {
  return api.post("/user/login", data);
};

export const logoutUserData = () => {
  return api.patch("/user/logout");
};

export const checkUserAuth = () => {
  return api.get("/user/check-auth");
};

export const createTask = (data) => {
  return api.post("/todo/add-todo",data);
};
export const getTask = () => {
  return api.get("/todo/get-todo");
};

export const delTask = (id) =>{
  return api.delete(`/todo/delete-todo/${id}`)
}

export const updateTask = (id,data) =>{
  return api.patch(`/todo/update-todo/${id}`,data)
}