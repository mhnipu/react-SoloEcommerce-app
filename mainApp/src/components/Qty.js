import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Qty = ({ item }) => {
  const { handleSelect, handleInput, addToCart, decreaseFromCart } = useContext(CartContext);

  // Function to handle the change in quantity (increment/decrement)
  const handleAmountChange = (changeType) => {
    if (changeType === 'inc') {
      addToCart(item, item.id); // Increase quantity
    } else if (changeType === 'dec') {
      decreaseFromCart(item.id); // Decrease quantity
    }
  };

  // Generate options for quantity selection
  const options = [];
  for (let i = 1; i <= 1000; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <div className='flex gap-x-2 items-center'>
      {item.amount <= 1000 ? (
        // Render a select input if quantity is less than or equal to 1000
        <div className='flex flex-row gap-x-2'>
          <select
            onChange={(e) => handleSelect(e, item.id)}
            value={item.amount}
            className='p-2 rounded-md w-[80px] outline-none h-auto input hover:text-accent transition-all duration-500 cursor-pointer border border-gray-700'
          >
            {options}
          </select>
          <div className="flex flex-col justify-center items-center">
            {/* Buttons to increment and decrement quantity */}
            <button onClick={() => handleAmountChange('inc')} className="px-2 rounded-md hover:bg-accent hover:text-black hover:transition-all duration-300 text-gray-200 mb-1 bg-[#1d1f23] border border-gray-700">+</button>
            <button onClick={() => handleAmountChange('dec')} className="px-2 rounded-md hover:bg-accent hover:text-black hover:transition-all duration-300 text-gray-200 bg-[#1d1f23] border border-gray-700">-</button>
          </div>
        </div>
      ) : (
        // Render an input field if quantity exceeds 1000
        <input
          onBlur={(e) => handleInput(e, item.id)}
          value={item.amount}
          type="text"
          className="text-gray-50 placeholder:text-gray-300 h-10 rounded-md p-4 w-[100px] input border border-gray-400"
          placeholder={`${item.amount}`}
        />
      )}
    </div>
  );
};

export default Qty;
