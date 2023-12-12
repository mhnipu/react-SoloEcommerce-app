import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import RelatedProducts from '../components/RelatedProducts'
import { CartContext } from '../context/CartContext'

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext)
  const { id } = useParams(); // Ensure you invoke `useParams()` to get the `id` value
  
  const { data, error, isLoading } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // Check if data exists and has elements before accessing its properties
  if (!data || data.length === 0) {
    return <div>No data found</div>;
  }
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;


  return (
    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>
          <div className='flex-1 lg:max-w-[40%] lg:h-[450px] grad rounded-xl flex justify-center items-center'>
            {/* Ensure data[0] exists before accessing its properties */}
            <img
              src={`http://localhost:1337${data[0]?.attributes?.image?.data?.attributes?.url}`}
              alt="" className="w-full max-w-[60%] Hover"
            />
          </div>
          <div className="flex-1 bg-primary p-12 rounded-xl xl:p-15 flex flex-col justify-center">
            <div className='text-lg font-medium mb-3'><span className='uppercase text-accent'>{data[0].attributes.categories.data[0].attributes.title}  </span>
              Cameras
            </div>
            <h2 className='h2 mb-4'>{data[0].attributes.title}</h2>
            <p className='text-gray-300 mb-12'>{data[0].attributes.description}</p>
            <div className='flex items-center gap-x-8'>
              <div className='text-2xl text-accent font-semibold'>${data[0].attributes.price}</div>
              <button onClick={() => addToCart(data, id)} className="btn btn-accent Hover"> Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Render your RelatedProducts component */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div >
    </div >
  );
};

export default ProductDetails;
