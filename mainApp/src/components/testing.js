// Product.js
import React from 'react';
import CartItem from './CartItem';

const Product = ({ product }) => {
    // Ensure product and its attributes are defined before passing to CartItem
    if (!product || !product.attributes) {
        return <div>No product data found</div>;
    }

    return (
        <div>
            {/* Other product details */}
            <CartItem product={product} />
            {/* Other components or details */}
        </div>
    );
};

export default Product;
