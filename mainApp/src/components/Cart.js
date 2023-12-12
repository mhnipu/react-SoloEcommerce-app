import React, { useContext, useEffect } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Cart = () => {
  const { isOpen, setIsOpen, cart, total } = useContext(CartContext);
  const sortedCart = [...cart].sort((a, b) => b.amount - a.amount);

  useEffect(() => {
    // Check if the cart is empty and automatically close the sidebar
    if (cart.length === 0 && isOpen) {
      setIsOpen(false);
    }
  }, [cart, isOpen, setIsOpen]);


  return (
    <div className="w-full h-full  text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[90vh] scroll-container ">

        <div
          onClick={() => setIsOpen(false)}
          className='text-4xl w-20 h-[60px] flex justify-start items-center cursor-pointer Hover bottom-0 hover:text-accent px-4'
        >
          <CloseOutlinedIcon style={{ fontSize: '2rem' }} />
        </div>
        <div >
          {/* Scrollable section */}
          <div className="cart-items-scrollable flex flex-col gap-y-8 px-4 mb-20 mt-6">
            {sortedCart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      {/* Sticky section */}
      <div className=' sticky bottom-2 ml-2 m-2 grad  rounded-xl h-auto p-4 flex flex-col'>
        {cart.length >= 1 && (
          <div className='text-accent '>
            <div className='flex justify-between text-sm'>
              <div>Subtotal</div>
              <div>${total}</div>
            </div>
            <div className='flex justify-between text-lg font-bold'>
              <div>Total</div>
              <div>${total}</div>
            </div>
          </div>
        )}
        <div>
          {
            cart.length >= 1 ?
              (<div className='flex flex-row justify-between mt-4'>
                <button className='btn bg-primary text-accent hover:bg-accent-hover hover:text-primary transition-all duration-500 p-5 '>
                  Clear Cart
                </button>
                <button className='btn bg-primary text-accent hover:bg-accent-hover hover:text-primary transition-all duration-500 p-5 w-[60%]'>
                  Checkout
                  <ArrowForwardIosOutlinedIcon style={{ fontSize: '0.9rem' }} />
                </button>
              </div>)
              :
              (<div>Your Cart is empty</div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
