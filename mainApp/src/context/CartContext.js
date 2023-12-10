import React, { createContext, useEffect, useState } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemsAmount(amount);
  }, [cart]);

  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };
    setCart([...cart, newItem]);
    const cartItem = cart.find((item) => {
      return item.id === itemID;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1);
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    setIsOpen(true);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // const handleInput = (e, id) => {
  //   const value = parseInt(e.target.value);
  //   const cartItem = cart.find((item) => {
  //     return item.id === id
  //   });
  //   if (cartItem) {
  //     const newCart = cart.map(item => {
  //       if (item.id === id) {
  //         if (isNaN(value)) {
  //           setAmount(1)
  //           return { ...item, amount: 1 }
  //         } else {
  //           setAmount(value)
  //           return { ...item, amount: value }
  //         }
  //       } else {
  //         return item
  //       }
  //     });
  //     setCart(newCart)
  //   }
  //   setIsOpen(true);
  //   console.log(cart);
  // };


  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);

    const newCart = cart.map(item => {
      if (item.id === id) {
        if (!isNaN(value) && value >= 1) {
          setAmount(value)
          return { ...item, amount: value };
        } else {
          setAmount(1)
          return { ...item, amount: 1 };
        }
      }
      return item;
    });

    setCart(newCart);
    setIsOpen(true);
    console.log(cart);
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
        handleInput
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
