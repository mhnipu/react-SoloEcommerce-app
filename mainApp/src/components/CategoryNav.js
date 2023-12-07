import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const { data } = useFetch('/categories');
  return <aside className='hidden xl:flex'>
    <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-lg overflow-hidden'>
      <div className='bg-accent py-4 text-primary uppercase font-semibold flex items-center text-lg  justify-center'>Brows Category</div>
      <div className='flex flex-col gap-y-6 p-6'>{data?.map((category) => {
        return <Link key={category.id} className='hover:scale-105 transition-all duration-500 cursor-pointer uppercase hover:text-accent hover:underline' to={`/products/${category.id}`}>{category.attributes.title}</Link>
      })}</div>
    </div>
  </aside>;
};

export default CategoryNav;
