import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

const Product = ({ product, highlight }) => {
    // ... existing code

    return (
        <div className={`grad w-full h-[380px] group rounded-xl overflow-hidden relative mb-8 ${highlight ? 'highlighted' : ''}`}>
            {/* ... existing code */}
        </div>
    );
};

export default Product;
