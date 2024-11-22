import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

 
  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item !== itemToRemove));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
