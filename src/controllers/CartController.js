import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  loadCart,
  saveCart,
  addCartItem,
  removeCartItem,
  clearCart as clearCartModel,
  getCartTotalQuantity,
  getCartTotalPrice,
} from '../models/CartModel';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(loadCart);

  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => addCartItem(prevItems, product));
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => removeCartItem(prevItems, productId));
  };

  const clearCart = () => setCartItems(clearCartModel());

  const totalQuantity = getCartTotalQuantity(cartItems);
  const totalPrice = getCartTotalPrice(cartItems);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default useCart;