import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (cake) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === cake.id);
      
      if (existingItem) {
        return prevCart.map((item) => 
          item.id === cake.id ? {...item, quantity: item.quantity + 1} : item
        );
      }
      return [...prevCart, {...cake, quantity: 1}];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}