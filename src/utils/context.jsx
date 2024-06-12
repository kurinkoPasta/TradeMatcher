import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
  }, []);
  return (
    <Context.Provider value={{ isAuthenticated }}>{children}</Context.Provider>
  );
};

const useGlobalContext = () => useContext(Context);

export { ContextProvider, useGlobalContext };
