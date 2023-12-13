import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
import { Pagination } from 'swiper';
import CameraImg from '../img/camera.png';

const sliderData = [
  {
    img: CameraImg,
    pretitle: 'Special offer 1',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    buttonText: 'Shop now'
  },
  {
    img: CameraImg,
    pretitle: 'Special offer 2',
    titlePart1: 'Save 30%',
    titlePart2: 'On your',
    titlePart3: 'next purchase',
    buttonText: 'Buy now'
  },
  {
    img: CameraImg,
    pretitle: 'Limited time offer',
    titlePart1: 'Get 25% off',
    titlePart2: 'On selected items',
    titlePart3: 'Hurry up!',
    buttonText: 'Explore'
  },
  // Add more dummy data as needed
];

const MainSlider = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;

      const interval = setInterval(() => {
        if (swiper.isEnd) {
          swiper.slideTo(0); // Return to the first slide when reaching the end
        } else {
          swiper.slideNext(); // Slide to the next one
        }
      }, 5000); // Adjust the interval duration as needed (3000ms = 3 seconds)

      // Stop the interval when component unmounts or on clean-up
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Pagination]}
      loop={true}
      speed={3000} // Adjust the speed as needed (1000ms = 1 second)
      pagination={{
        clickable: true,
      }}
      className='mainSlider h-full bg-primary xl:bg-mainSlider rounded-lg xl:bg-no-repeat max-w-lg lg:max-w-none overflow-hidden drop-shadow-2xl'
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
            <div className='w-full lg:flex-1'>
              <div className='uppercase mb-1 text-center lg:text-left'>{slide.pretitle}</div>
              <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                {slide.titlePart1}<br />
                {slide.titlePart2}<br />
                {slide.titlePart3}
              </div>
              <button className='btn btn-accent mx-auto lg:mx-0 Hover'>{slide.buttonText}</button>
            </div>
            <div className="flex-1">
              <img className="xl:absolute xl:-right-16 xl:-bottom-12" src={slide.img} alt="" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
