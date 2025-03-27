import React from 'react';

const AboutUs = () => {
    return (
        <section id='aboutus' className='pt-5 -mt-84'>
            <div className="p-4 sm:p-8 bg-white border-2 border-[#3b8e96] rounded-lg shadow-xl max-w-6xl mx-auto mt-20 flex flex-col md:flex-row transition-all duration-300 hover:shadow-3xl">
                <div className="w-full md:w-4/5 lg:w-3/5 md:pr-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#3b8e96] mb-4">О компании</h1>
                    <p className="text-gray-700 mb-6">
                        <strong>«АЛЬФА-КОНСАЛТ»</strong> — более 5 лет на рынке. Компания «АЛЬФА-КОНСАЛТ» — разработчик и системный интегратор решений на платформе «1С:Предприятие».
                    </p>

                    <h2 className="text-xl sm:text-2xl font-semibold text-[#3b8e96] mb-2">Специализация</h2>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                        <li>Комплексная автоматизация на платформе «1С:Предприятие 8»</li>
                        <li>Внедрение и сопровождение программных продуктов фирмы «1С»</li>
                        <li>Информационно-технологическое сопровождение и поддержка клиентов на основании абонентского договора</li>
                        <li>Автоматизация розничной торговли</li>
                        <li>Автоматизация оптовой торговли</li>
                        <li>Складская логистика</li>
                        <li>Интернет-магазин на Битрикс</li>
                        <li>Интеграция с маркетплейсами</li>
                        <li>Компьютеры и сети</li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-semibold text-[#3b8e96] mb-2">Контакты</h2>
                    <p className="text-gray-700 mb-2 sm:mb-4">Юридический адрес: 394014, г.Воронеж, ул.Лебедева, д.4, оф. 28</p>
                    <p className="text-gray-700 mb-2 sm:mb-4">Адрес: 394014, г.Воронеж, ул.Лебедева, д.4, оф. 28</p>
                    <p className="text-gray-700 mb-2 sm:mb-4">Телефон: <a href="tel:+74732071720" className="text-[#3b8e96]">+7 (473) 207-17-20</a></p>
                    <p className="text-gray-700 mb-2 sm:mb-4">Электронная почта: <a href="mailto:buh@aa-consult.ru" className="text-[#3b8e96]">buh@aa-consult.ru</a></p>
                    <p className="text-gray-700 mb-4 sm:mb-6">Веб-сайт: <a href="https://aa-consult.ru/" target="_blank" rel="noopener noreferrer" className="text-[#3b8e96]">https://aa-consult.ru/</a></p>

                    <h2 className="text-xl sm:text-2xl font-semibold text-[#3b8e96] mb-2">График работы</h2>
                    <p className="text-gray-700 mb-2 sm:mb-4">пн.-пт. — с 9:00 до 18:00</p>
                    <p className="text-gray-700 mb-4 sm:mb-6">сб.-вс. — выходные</p>

                    <h2 className="text-xl sm:text-2xl font-semibold text-[#3b8e96] mb-2">Реквизиты</h2>
                    <p className="text-gray-700 mb-1 sm:mb-2">ООО «АЛЬФА-КОНСАЛТ»</p>
                    <p className="text-gray-700 mb-1 sm:mb-2">ОГРН 1173668035760</p>
                    <p className="text-gray-700 mb-1 sm:mb-2">ИНН 3663128762</p>
                    <p className="text-gray-700 mb-1 sm:mb-2">КПП 366301001</p>
                    <p className="text-gray-700">ОКВЭД "Основной вид деятельности Разработка компьютерного программного обеспечения (62.01)"</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;