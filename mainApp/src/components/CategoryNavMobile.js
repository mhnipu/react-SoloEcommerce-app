import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const CategoryNavMobile = ({ setCatnavMobile }) => {
  return <div className='w-full h-full backDrop p-8'>

    <div onClick={() => setCatnavMobile(false)} className='flex justify-end mb-8 cursor-pointer'>
      <CloseOutlinedIcon style={{ fontSize: '3rem' }} />
    </div>
    chategory
  </div>;
};

export default CategoryNavMobile;
