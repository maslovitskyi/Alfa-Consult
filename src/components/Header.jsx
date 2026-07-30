import React from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png';
import qrCode from '../assets/qrvk.jpg'; 

const Header = ({ onOpenModal }) => { // <-- Добавили пропс onOpenModal
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <header>
      <nav className='bg-[#0F2C59] border-b-2 border-[#D2B471] p-2 md:p-4 text-white fixed top-0 left-0 w-full z-50'>
        <div className='container mx-auto flex justify-between items-center'>
          
          <button onClick={scrollToTop} className='text-lg md:text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity'>
            <img src={logo} alt="Logo" className='h-12 w-auto md:h-16' />
          </button>

          <div className="hidden xl:flex flex-col items-center">
            <span className="font-semibold text-[#D2B471]">
              +7 (473) 207-17-20 
              <span className="text-sm font-normal text-white ml-2">(c 9-00 до 18-00)</span>
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            
            <div className="hidden md:flex items-center gap-4">
              <Link to='aboutus' smooth={true} duration={500} className='text-sm md:text-xl font-bold cursor-pointer hover:text-[#D2B471] transition-colors'>
                О нас
              </Link>
              <Link to="services-grid" smooth={true} duration={500} className='text-sm md:text-xl font-bold cursor-pointer hover:text-[#D2B471] transition-colors'>
                Услуги
              </Link>
              <Link to='vacancies' smooth={true} duration={500} className='text-sm md:text-xl font-bold cursor-pointer hover:text-[#D2B471] transition-colors'>
                Преимущества
              </Link>
            </div>

            {/* НОВАЯ КНОПКА ВЫЗОВА ФОРМЫ */}
            <button 
              onClick={onOpenModal}
              className="hidden sm:block border-2 border-[#D2B471] text-[#D2B471] px-4 py-1.5 md:py-2 rounded-lg font-bold hover:bg-[#D2B471] hover:text-[#0F2C59] transition-all"
            >
              Связаться с нами
            </button>

            {/* QR КОД */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded shadow-md flex items-center justify-center shrink-0 cursor-pointer hover:scale-105 transition-transform overflow-hidden p-0.5">
              
              {<img src={qrCode} alt="QR Code" className="w-full h-full object-cover" />}
            </div>
            
          </div>
        </div>

        <div className="xl:hidden text-center mt-2 flex flex-col items-center gap-2">
          <div>
            <span className="text-sm font-semibold text-[#D2B471]">+7 (473) 207-17-20</span>
            <span className="text-xs block text-white">(c 9-00 до 18-00)</span>
          </div>
          {/* Кнопка формы для мобильных устройств */}
          <button 
            onClick={onOpenModal}
            className="sm:hidden w-full max-w-[200px] border border-[#D2B471] text-[#D2B471] px-4 py-1 rounded-md text-sm font-bold hover:bg-[#D2B471] hover:text-[#0F2C59] transition-all"
          >
            Оставить заявку
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;