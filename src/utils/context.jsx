import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setIsAuthenticated(!!user);
      if (!!user)
        setListings(
          (await getDocs(collection(db, "listings"))).docs.map((snap) => ({
            ...snap.data(),
            id: snap.id,
          }))
        );
    });
  }, []);

  const values = { isAuthenticated, listings };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useGlobalContext = () => useContext(Context);

export { ContextProvider, useGlobalContext };
