import { createContext, useContext, useState } from "react";

const todoContext = createContext({
  todo: {},
  add: () => {},
  del: () => {},
  update: () => {},
  isAuthenticated: false,
});

export const TodoContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true)
  const logout = () => setIsAuthenticated(false)

  return (
    <todoContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(todoContext);
};
