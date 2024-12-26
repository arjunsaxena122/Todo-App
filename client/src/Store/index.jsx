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
  const [user, setUser] = useState({});

  return (
    <todoContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(todoContext);
};
