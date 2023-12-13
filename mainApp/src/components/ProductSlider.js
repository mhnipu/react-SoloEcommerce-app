import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import '../slider.css'; // Import custom CSS
import { Pagination } from 'swiper'; // Import Pagination module from Swiper
import Product from '../components/Product'; // Assuming Product component exists
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const ProductSlider = ({ data, currentProductId }) => {
  const swiperRef = useRef(null);
  const [paginationVisible, setPaginationVisible] = useState(true);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper && data) {
      const swiper = swiperRef.current.swiper;

      // Determine whether to display pagination based on the number of products
      setPaginationVisible(data.length > 5);

      // Set interval to automatically slide to the next item after a specified time
      const interval = setInterval(() => {
        if (swiper.isEnd) {
          swiper.slideTo(0); // Go back to the first slide when reaching the end
        } else {
          swiper.slideNext(); // Slide to the next item
        }
      }, 6000); // Adjust the interval duration as needed (6000ms = 6 seconds)

      // Clear the interval on component unmount or clean-up
      return () => clearInterval(interval);
    }
  }, [data]);

  return (
    <div className='productSliderContainer cursor-pointer'>
      {/* Display prev/next buttons if pagination is visible */}
      {paginationVisible && (
        <div className='flex flex-row justify-center mb-2 items-center'>
          <button className='btn cursor-pointer text-accent hover:text-accent hover:underline' onClick={() => swiperRef.current.swiper.slidePrev()}>
            <ArrowBackIosNewOutlinedIcon /> Prev
          </button>
          <button className='btn cursor-pointer text-accent hover:text-accent hover:underline' onClick={() => swiperRef.current.swiper.slideNext()}>
            Next <ArrowForwardIosOutlinedIcon />
          </button>
        </div>
      )}
      {/* Swiper component for product slider */}
      <Swiper
        ref={swiperRef}
        modules={[Pagination]} // Use Swiper's Pagination module
        loop={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true, // Enable clickable pagination bullets
        }}
        className='productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]' // Custom classes for styling
        autoplay={{ delay: 8000 }} // Autoplay with specified delay (8000ms = 8 seconds)
      >
        {/* Render each product within a SwiperSlide */}
        {data?.map((product) => (
          <SwiperSlide key={product.id}>
            {/* Render Product component with highlight if it matches currentProductId */}
            <Product
              product={product}
              highlight={product.id === currentProductId} // Apply a highlight class if the product matches the currentProductId
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
