import React, { useContext, useEffect } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { isOpen, setIsOpen, cart } = useContext(CartContext);
  const sortedCart = [...cart].sort((a, b) => b.amount - a.amount);

  useEffect(() => {
    // Check if the cart is empty and automatically close the sidebar
    if (cart.length === 0 && isOpen) {
      setIsOpen(false);
    }
  }, [cart, isOpen, setIsOpen]);

  return (
    <div className="w-full h-full px-4 text-white overflow-y-auto scrollbar-hidden">
      <div>
        <div
          onClick={() => setIsOpen(false)}
          className='text-4xl w-20 h-[99px] flex justify-start items-center cursor-pointer Hover hover:text-accent'
        >
          <CloseOutlinedIcon style={{ fontSize: '2rem' }} />
        </div>
        <div className="flex flex-col gap-y-8 px-4">
          {sortedCart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
