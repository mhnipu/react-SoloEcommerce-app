// Importing necessary modules/components from React and React Router
import React from "react";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
// Creating a functional component called Product that takes a 'product' object as a prop
const Product = ({ product }) => {
  return (
    // Wrapping the content in a React Router Link component, though the 'to' attribute is missing here
    <Link to={`/product/${product.id}`}>
      {/* Container div for the product */}
      <div className="grad w-full h-[340px] group rounded-xl overflow-hidden relative mb-8">
        {/* Checking if the product has an attribute 'isNew' to display a 'new' label */}
        {product.attributes.isNew ? (
          <div className="absolute bg-accent text-primary text-[10px] font-extrabold uppercase top-2 right-2 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          // Empty string if product is not new
          ""
        )}
        {/* Container for the product image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          {/* Displaying the product image */}
          <img
            className="w-[160px] h-[160px] group-hover:scale-110 transition-all duration-500"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        {/* text */}
        <div className="px-3 pb-8 flex flex-col">
          {/* Tooltip with category title */}

          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* Content */}
          <Tooltip title={product.attributes.title} placement="top-end" arrow>
            <div className="text-[15px] mb-2 lg:mb-6">
              {product.attributes.title.substring(0, 35)}. . .
            </div>
          </Tooltip>
          <div className="text-lg text-accent">
            ${product.attributes.price}
          </div>
        </div>
      </div>
    </Link>
  );
};

// Exporting the Product component as default
export default Product;




