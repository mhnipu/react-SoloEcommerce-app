import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!product || !product.attributes || !product.attributes.image || !product.attributes.image.data || !product.attributes.image.data.attributes) {
    return <div>No image found</div>;
  }
  if (!product || !product.attributes) {
    return <div>No product data found</div>;
  }

  return (
    <div className="grad w-full h-[380px] group rounded-xl overflow-hidden relative mb-8">
      {product.attributes.isNew ? (
        <div className="absolute bg-accent text-primary text-[10px] font-extrabold uppercase top-2 right-2 px-2 rounded-full z-10">
          new
        </div>
      ) : (
        ''
      )}
      <div className="w-full h-[200px] flex items-center justify-center relative">
        <Link to={`/product/${product.id}`}>
          <img
            className="w-[160px] h-[160px] group-hover:scale-110 transition-all duration-500"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </Link>
      </div>
      <div className="px-3 pb-8 flex flex-col">
        <div className="text-sm text-accent capitalize mb-2">
          {product.attributes.categories.data[0].attributes.title}
        </div>
        <Tooltip title={product.attributes.title} placement="top-end" arrow>
          <div className="text-[15px] mb-2 lg:mb-6">
            {product.attributes.title.substring(0, 35)}. . .
          </div>
        </Tooltip>
        <div className="flex flex-col justify-between text-accent">
          <div className='flex flex-col text-xl '>${product.attributes.price}</div>
          <div className='flex flex-col'>
            <button onClick={() => addToCart(product, product.id)} className="h-[35px] flex justify-center items-center rounded-[8px] px-10 py-[10px] text-sm uppercase font-bold hover:btn-accent bg-primary text-gray-400 Hover mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
