import React, { useState, createContext } from "react";
export const GlobaleContext = createContext();
export const ContextState = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <GlobaleContext.Provider value={{ cart, setCart, showCart, toggleCart }}>
      {children}
    </GlobaleContext.Provider>
  );
};