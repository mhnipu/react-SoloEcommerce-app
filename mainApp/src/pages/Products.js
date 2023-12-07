import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';
import { CartContext } from '../context/CartContext';

const Products = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  const [title, setTitle] = useState(null);
  useEffect(() => {
    if (data && data.length > 0) { // Add a check for data and its length
      setTitle(data[0]?.attributes?.categories?.data[0]?.attributes?.title || null);
    }
  }, [data]);


  return <div className="mb-16 pt-40 lg:pt-0">
    <div className='container mx-auto '>
      <div className='flex gap-x-[30px]'>
        <CategoryNav />
        <main>
          <div className='text-xl py-3 pt-0 '><span className=' text-accent uppercase'>{title}</span> Camera </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px] '>
            {data?.map((product) => {
              return <Product product={product} key={product.id} />
            })}
          </div>
        </main>
      </div>
    </div>
  </div>;
};

export default Products;
