import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import '../slider.css';
import { Pagination, } from 'swiper';
import Product from '../components/Product';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const ProductSlider = ({ data }) => {
  const swiperRef = useRef(null);
  const [paginationVisible, setPaginationVisible] = useState(true);



  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper && data) {
      const swiper = swiperRef.current.swiper;

      // Logic to show/hide buttons based on the number of products
      setPaginationVisible(data.length > 5);

      const interval = setInterval(() => {
        if (swiper.isEnd) {
          swiper.slideTo(0); // Return to the first slide when reaching the end
        } else {
          swiper.slideNext(); // Slide to the next one
        }
      }, 6000); // Adjust the interval duration as needed (6000ms = 6 seconds)

      // Stop the interval when component unmounts or on clean-up
      return () => clearInterval(interval);
    }
  }, [data]);

  return (
    <div className='productSliderContainer cursor-pointer'>
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

      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
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
          clickable: true,
        }}
        className='productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
        autoplay={{ delay: 8000 }} // Set the delay in milliseconds (8000ms = 8 seconds)
      >
        {data?.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
