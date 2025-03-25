import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3b8e96] text-white pt-8 mt-2">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
          <div>
            <h3 className="text-lg font-bold mb-4">О компании</h3>
            <p className="block">О компании</p>
            <p className="block">Продукты 1С</p>
            <p className="block">Решения</p>
            <p className="block">Услуги</p>
            <p className="block">Вакансии</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Отраслевые решения</h3>
            <p className="block">Розничная торговля</p>
            <p className="block">Общепит</p>
            <p className="block">Логистика</p>
            <p className="block">Дистрибуция</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Программное обеспечение</h3>
            <p className="block">Продукты 1С</p>
            <p className="block">Антивирусы</p>
            <p className="block">Microsoft</p>
            <p className="block">ABBY</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Дополнительные услуги</h3>
            <p className="block">Монтаж кабельных сетей</p>
            <p className="block">IP телефония</p>
            <p className="block">IP видеонаблюдение</p>
            <p className="block">Мониторинг ИТ-систем</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-sm sm:text-base">
            2017–2025 © ООО «АЛЬФА-КОНСАЛТ»<br className="sm:hidden"/>
            ОГРН 1173668035760 ИНН 3663128762
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;