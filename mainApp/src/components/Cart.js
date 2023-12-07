import React, { useContext } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';


const Cart = () => {
  const { setIsOpen, cart } = useContext(CartContext)

  return <div className="w-full h-full px-4 text-white">
    <div>


      <div
        onClick={() => setIsOpen(false)} className='text-4xl w-20 h-[99px] flex justify-start items-center cursor-pointer Hover hover:text-accent'>
        <CloseOutlinedIcon style={{ fontSize: '2rem' }} />
      </div>
      <div className="flex flex-col gap-y-8 px-4">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
    </div>
  </div>;
};

export default Cart;


