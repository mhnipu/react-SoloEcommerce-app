import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductSlider from './ProductSlider';

const RelatedProducts = ({ categoryTitle, currentProductId }) => {
  // Fetch related products based on the category title
  const { data } = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`);

  // Filter out the current product from the related products data
  const filteredData = data ? data.filter(product => product.id !== currentProductId) : [];

  return (
    <div className='mb-16'>
      <div className='container mx-auto'>
        {/* Title for related products */}
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>

        {/* Display related products in a slider */}
        <ProductSlider data={filteredData} currentProductId={currentProductId} />
      </div>
    </div>
  );
};

export default RelatedProducts;
