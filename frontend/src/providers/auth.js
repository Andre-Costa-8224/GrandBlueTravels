import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    cpf: "",
  });

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({
        cpf: "",
      });
    }
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(Context);
  const { user, setUser } = context;
  return { user, setUser };
};
