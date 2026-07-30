import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#0F2C59] border-t-4 border-[#D2B471] text-white pt-12 pb-8 mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Левая колонка: Бренд, Реквизиты и Политика */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-wide">Аудит-Бухгалтер</h2>
              <p className="text-[#D2B471] text-sm mt-1">бухгалтерский аутсорсинг</p>
            </div>
            
            <div className="text-gray-400 text-sm space-y-1">
              <p className="text-white font-semibold mb-2">Реквизиты:</p>
              <p>ООО «АЛЬФА-КОНСАЛТ»</p>
              <p>ОГРН 1173668035760</p>
              <p>ИНН 3663128762</p>
              <p>КПП 366301001</p>
              <p className="pt-2">г. Воронеж, ул. Лебедева, д.4, оф. 28</p>
            </div>

            <a href="#" className="text-sm text-gray-500 hover:text-[#D2B471] transition-colors pt-2">
              Политика конфиденциальности
            </a>
          </div>

          {/* Центральная колонка: Вертикальная навигация */}
          <div className="flex flex-col space-y-4 md:items-center">
            <div className="flex flex-col space-y-4">
              <Link to='aboutus' smooth={true} duration={500} className="cursor-pointer text-lg font-semibold hover:text-[#D2B471] transition-colors w-fit">
                О нас
              </Link>
              <Link to='services-grid' smooth={true} duration={500} className="cursor-pointer text-lg font-semibold hover:text-[#D2B471] transition-colors w-fit">
                Услуги
              </Link>
              <Link to='vacancies' smooth={true} duration={500} className="cursor-pointer text-lg font-semibold hover:text-[#D2B471] transition-colors w-fit">
                Преимущества
              </Link>
            </div>
          </div>

          {/* Правая колонка: Контакты и кнопка */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-3">
              <a href="mailto:zakazbo@aa-consult.ru" className="block text-xl hover:text-[#D2B471] transition-colors">
                zakazbo@aa-consult.ru
              </a>
              <a href="tel:+74732071720" className="block text-2xl font-bold hover:text-[#D2B471] transition-colors">
                +7 (473) 207-17-20
              </a>
              <p className="text-gray-400 text-sm">
                пн.-пт. — с 9:00 до 18:00
              </p>
            </div>

            {/* Кнопка "Получить консультацию" (возвращает наверх к форме) */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-[#0F2C59] px-6 py-3 rounded-lg font-bold w-fit hover:bg-[#D2B471] hover:text-[#0F2C59] transition-all flex items-center gap-2 group shadow-lg"
            >
              Получить консультацию
              {/* Иконка стрелочки, которая анимируется при наведении */}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;