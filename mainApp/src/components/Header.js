import React, { useContext, useState } from 'react';
import Logo from '../img/logo.png';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchForm from '../components/SearchForm';
import CategoryNavMobile from '../components/CategoryNavMobile';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext';

const Header = () => {
  // Cart context and state for mobile category navigation
  const { isOpen, setIsOpen } = useContext(CartContext);
  const [catNavMobile, setCatnavMobile] = useState(false);

  return (
    // Header section
    <header className="py-6 fixed w-full top-0 z-40 bg-primary lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        {/* Main header content */}
        <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
          {/* Mobile category navigation */}
          <div onClick={() => setCatnavMobile(true)} className='text-3xl xl:hidden cursor-pointer'>
            <ListOutlinedIcon style={{ fontSize: '3rem' }} />
          </div>

          {/* Mobile category navigation content */}
          <div className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-500`}>
            <CategoryNavMobile setCatnavMobile={setCatnavMobile} />
          </div>

          {/* Logo */}
          <Link to={'/'}>
            <img src={Logo} alt="" />
          </Link>

          {/* SearchForm - visible on desktop */}
          <div className='hidden w-full xl:flex xl:max-w-[734px]'>
            <SearchForm />
          </div>

          {/* Contact and shopping cart section */}
          <div className='flex items-center gap-x-[10px]'>
            <div className='hidden xl:flex uppercase'>Need help? 123 456 789</div>
            {/* Shopping Bag icon */}
            <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
              <ShoppingBagOutlinedIcon fontSize='large' />
              {/* Cart items count */}
              <div className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-5 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>2</div>
            </div>
            {/* Cart - visible on mobile when cart is opened */}
            <div className={`${isOpen ? 'right-0' : '-right-full'} shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-500 backDrop`}>
              <Cart />
            </div>
          </div>
        </div>

        {/* SearchForm - visible on mobile */}
        <div className='xl:hidden'>
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
