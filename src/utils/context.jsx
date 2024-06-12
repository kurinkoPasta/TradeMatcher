import { createContext, useContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const user = "akari";
  return <Context.Provider value={{ user }}>{children}</Context.Provider>;
};

const useGlobalContext = () => useContext(Context);

export { ContextProvider, useGlobalContext };
