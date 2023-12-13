import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // State to manage cart visibility
  const [isOpen, setIsOpen] = useState(false);

  // State to manage cart items
  const [cart, setCart] = useState([]);

  // State to keep track of the total number of items in the cart
  const [itemsAmount, setItemsAmount] = useState(0);

  // State to calculate the total cost of items in the cart
  const [total, setTotal] = useState(0);

  // Update the total number of items whenever the cart changes
  useEffect(() => {
    const amount = cart.reduce((a, c) => a + c.amount, 0);
    setItemsAmount(amount);
  }, [cart]);

  // Calculate the total cost of items in the cart
  useEffect(() => {
    const total = cart.reduce((a, c) => a + c.attributes.price * c.amount, 0);
    setTotal(total);
  }, [cart]);

  // Add an item to the cart or update the quantity if it already exists
  const addToCart = (item, id) => {
    // Check if the item is already in the cart
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };
    const cartItem = cart.find((item) => item.id === itemID);

    // Update the cart based on whether the item exists or not
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === itemID ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      const updatedCart = [...cart, newItem];
      const sortedCart = updatedCart.sort((a, b) => b.amount - a.amount);
      setCart(sortedCart);
    }
    setIsOpen(true);
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // Decrease the quantity of an item in the cart
  const decreaseFromCart = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount - 1 } : item
    );

    const newCart = updatedCart.filter((item) => item.amount > 0);
    setCart(newCart);
  };

  // Handle input changes for item quantity in the cart
  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, amount: isNaN(value) || value <= 0 ? 1 : value } : item
    );
    setCart(newCart);
    setIsOpen(true);
  };

  // Handle select changes for item quantity in the cart
  const handleSelect = (e, id) => {
    const value = e.target.value;
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, amount: parseInt(value) } : item
    );
    setCart(newCart);
  };

  // Clear the cart completely
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
        handleSelect,
        decreaseFromCart,
        total,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
