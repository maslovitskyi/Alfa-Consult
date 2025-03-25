import React from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png';
const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };
  return (
    /* шапка сайта */
    <header>
    <nav className='bg-[#46a9b3] p-2 md:p-4 text-white fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex justify-between items-center'>
      <button 
            onClick={scrollToTop} 
            className='text-lg md:text-xl font-bold cursor-pointer'>
            <img 
              src={logo}
              alt="Logo" 
              className='h-12 w-auto md:h-16' 
            />
          </button>
        <div className="hidden md:flex flex-col items-center">
          <span className="adress-phone font-semibold">
            +7 (473) 207-17-20 
            <span className="text-sm font-normal ml-2">(c 9-00 до 18-00)</span>
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
        <Link
            to='aboutus'
            smooth={true}
            duration={500}
            className='text-base md:text-xl font-bold cursor-pointer hover:text-[#2a6a6f] transition-colors'
          >
            О нас
          </Link>
          <Link
            to="services-grid"
            smooth={true}
            duration={500}
            className='text-base md:text-xl font-bold cursor-pointer hover:text-[#2a6a6f] transition-colors'
          >
            Предложения
          </Link>
          <Link
            to='vacancies'
            smooth={true}
            duration={500}
            className='text-base md:text-xl font-bold cursor-pointer hover:text-[#2a6a6f] transition-colors'
          >
            Вакансии
          </Link>
        </div>
      </div>

      {/* Телефон для мобильных */}
      <div className="md:hidden text-center mt-1">
        <span className="text-sm font-semibold">+7 (473) 207-17-20</span>
        <span className="text-xs block">(c 9-00 до 18-00)</span>
      </div>
    </nav>
    </header>
  );
};

export default Header;