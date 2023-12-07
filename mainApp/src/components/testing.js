import React from 'react';

const AddToCartButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="btn btn-accent Hover">
            Add to Cart
        </button>
    );
};

export default AddToCartButton;


import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import AddToCartButton from './AddToCartButton'; // Import the AddToCartButton component

const AnotherComponent = ({ data, id }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        // Implement addToCart functionality specific to this component
        addToCart(data, id);
    };

    return (
        <div>
            {/* Your component content */}
            {/* ... */}
            {/* Place the AddToCartButton component with its onClick handling addToCart */}
            <AddToCartButton onClick={handleAddToCart} />
        </div>
    );
};

export default AnotherComponent;
