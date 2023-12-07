import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({ setCatnavMobile }) => {

  const { data } = useFetch('/categories')
  return <div className='w-[full] md:w-[40%] h-full backDrop p-8 pr-0 pt-0'>
    <div onClick={() => setCatnavMobile(false)} className='flex justify-end mb-8 pr-2 pt-2 cursor-pointer hover:transition-all duration-500 hover:text-accent'>
      <CloseOutlinedIcon style={{ fontSize: '3rem' }} />
    </div>
    <div className='flex flex-col uppercase font-semibold text-xl gap-y-6 '>
      {data?.map(category => {
        return <Link to={`products/${category.id}`} key={category.id} className='hover:scale-105 translate-x-4 duration-500 cursor-pointer uppercase hover:text-accent hover:underline w-[100px]'>
          {category.attributes.title}
        </Link>
      })}
    </div>
  </div>;
};

export default CategoryNavMobile;
