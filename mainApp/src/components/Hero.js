import React from 'react';
import CategoryNav from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';
import PromoImg1 from "../img/promo_img1.png";
import PromoImg2 from "../img/promo_img2.png";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* Display category navigation */}
          <div>
            <CategoryNav />
          </div>
          {/* Display main slider */}
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* Display promo items */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            {/* Promo item 1 */}
            <div className='grad flex-1 h-[250px] rounded-lg overflow-hidden relative p-6 hover:scale-105 transition-all duration-500'>
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                  Save 30% on all DSLR cameras
                </div>
                <a href="#" className='uppercase text-accent'>Shop Now</a>
              </div>
              <img className="absolute z-20 -top-1 -right-0" src={PromoImg1} alt="" />
            </div>
            {/* Promo item 2 */}
            <div className='grad flex-1 h-[250px] rounded-lg overflow-hidden relative p-6 hover:scale-105 transition-all duration-500'>
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                  Save 30% on all DSLR cameras
                </div>
                <a href="#" className='uppercase text-accent'>Shop Now</a>
              </div>
              <img className="absolute z-20 top-4 -right-0" src={PromoImg2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
