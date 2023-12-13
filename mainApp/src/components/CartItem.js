import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';
import Tooltip from '@mui/material/Tooltip';
import { CartContext } from '../context/CartContext';
import Qty from '../components/Qty'; // Update this path to your Qty component with Select

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className='flex gap-x-8'>
      <Link to={`product/${item.id}`} className='w-[100px] h-[100px] Hover'>
        <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="" className='w-auto h-auto ' />
      </Link>
      <div className="flex-1">
        <div className="flex flex-row justify-between gap-x-4 mb-2">
          <Link to={`product/${item.id}`}>
            <Tooltip title={item.attributes.title} placement="top-end" arrow>
              <div className="text-[15px]">
                {item.attributes.title.substring(0, 30)}. . .
              </div>
            </Tooltip>
          </Link>
          <div className="">
            <i
              onClick={() => removeFromCart(item.id)}
              className="pi pi-trash hover:text-red-500 cursor-pointer hover:transition-all"
              style={{ fontSize: '0.9rem' }}
            ></i>
          </div>
        </div>
        <div className="flex gap-x-6 items-center">
          <div className='mb-0'>
            <Qty item={item} />
          </div>
          <div className="text-accent text-xl items-end">${item.attributes.price * item.amount}</div>
        </div>
        <div>
          <span className="text-accent text-xs">
            ${item.attributes.price}
          </span>
          <span className='text-sm text-gray-300'>
            /piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
