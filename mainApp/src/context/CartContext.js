import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [total, setTotal] = useState(0)
  const [amount, setAmount] = useState(0)


  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemsAmount(amount);
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return a + c.attributes.price * c.amount
    }, 0)
    setTotal(total);
  }, [cart])


  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };
    const cartItem = cart.find((item) => item.id === itemID);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === itemID ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      // Add the new item to the cart and sort in descending order based on the amount
      const updatedCart = [...cart, newItem];
      const sortedCart = updatedCart.sort((a, b) => b.amount - a.amount);
      setCart(sortedCart);
    }
    setIsOpen(true);
  };


  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const decreaseFromCart = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount - 1 } : item
    );

    const newCart = updatedCart.filter((item) => item.amount > 0);
    setCart(newCart);
  };



  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, amount: isNaN(value) || value <= 0 ? 1 : value } : item
    );
    setCart(newCart);
    setIsOpen(true);
  };




  const handleSelect = (e, id) => {
    const value = e.target.value;
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, amount: parseInt(value) } : item
    );
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  }


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
