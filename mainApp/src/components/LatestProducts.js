import React from 'react';
import ProductSlider from './ProductSlider';
import useFetch from '../hooks/useFetch';

const LatestProducts = () => {
  // Fetch latest products marked as "isNew" using useFetch hook
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");

  return (
    <div>
      <div className="container mx-auto">
        {/* Display title for latest products */}
        <h2 className="h2 text-center xl:text-left">Latest Products</h2>
      </div>
      {/* Render ProductSlider component passing fetched data */}
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
