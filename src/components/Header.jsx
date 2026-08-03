import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo.png";
import qrCode from "../assets/qrvk.jpg";

const Header = ({ onOpenModal }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F2C59] border-b-2 border-[#D2B471] shadow-lg">

        {/* Верхняя строка */}
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">

          {/* Логотип */}
          <button
            onClick={scrollToTop}
            className="shrink-0 hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 md:h-14 w-auto"
            />
          </button>

          {/* Меню (ПК) */}
          <div className="hidden lg:flex items-center gap-8 text-white">

            <Link
              to="aboutus"
              smooth={true}
              duration={500}
              className="text-lg font-bold cursor-pointer hover:text-[#D2B471] transition-colors"
            >
              О нас
            </Link>

            <Link
              to="services-grid"
              smooth={true}
              duration={500}
              className="text-lg font-bold cursor-pointer hover:text-[#D2B471] transition-colors"
            >
              Услуги
            </Link>

            <Link
              to="vacancies"
              smooth={true}
              duration={500}
              className="text-lg font-bold cursor-pointer hover:text-[#D2B471] transition-colors"
            >
              Преимущества
            </Link>

          </div>

          {/* Правая часть */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Телефон */}
            <div className="text-right leading-tight">

              <div className="text-sm md:text-base font-semibold text-[#D2B471] whitespace-nowrap">
                +7 (473) 207-17-20
              </div>

              <div className="text-[10px] sm:text-[11px] md:text-xs text-white whitespace-nowrap">
                (с 9:00 до 18:00)
              </div>

            </div>

            {/* Кнопка (только ПК) */}
            <button
              onClick={onOpenModal}
              className="hidden xl:block border-2 border-[#D2B471] text-[#D2B471] px-4 py-2 rounded-lg font-bold hover:bg-[#D2B471] hover:text-[#0F2C59] transition-all whitespace-nowrap"
            >
              Связаться с нами
            </button>

            {/* QR */}
            <div className="w-9 h-9 md:w-11 md:h-11 bg-white rounded shadow-md overflow-hidden shrink-0 hover:scale-105 transition-transform cursor-pointer">

              <img
                src={qrCode}
                alt="QR Code"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

        {/* Кнопка для мобильных */}
        <div className="xl:hidden border-t border-white/10 px-4 py-2 flex justify-center">

          <button
            onClick={onOpenModal}
            className="w-full max-w-[220px] border border-[#D2B471] text-[#D2B471] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#D2B471] hover:text-[#0F2C59] transition-all"
          >
            Оставить заявку
          </button>

        </div>

      </nav>
    </header>
  );
};

export default Header;