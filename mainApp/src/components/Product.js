import React from 'react';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
  return <Link>
    <div>
      <div>
        <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt="" />
      </div>
    </div>
  </Link>;
};

export default Product;
