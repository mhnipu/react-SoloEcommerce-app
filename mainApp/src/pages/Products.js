import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import { CartContext } from '../context/CartContext';
import Product from '../components/Product';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  // Fetching products based on the category ID
  const { data } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    // Set the title based on the fetched data
    if (data && data.length > 0) {
      setTitle(data[0]?.attributes?.categories?.data[0]?.attributes?.title || null);
    }
  }, [data]);

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between gap-x-[30px]">
          {/* Render the CategoryNav component */}
          <CategoryNav />
          <main>
            <div className="text-xl py-3 pt-0 ">
              {/* Display the category title */}
              <span className=" text-accent uppercase">{title}</span> Camera
            </div>
            {/* Display products in a grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px] w-full">
              {data?.map((product) => (
                // Render each product using the Product component and pass addToCart as a prop
                <Product key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
