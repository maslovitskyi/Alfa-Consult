import React from 'react';

const AboutUs = () => {
    return (
        <section id='aboutus' className='pt-5 -mt-64'>
            <div className="p-4 sm:p-8 bg-white border-2 border-[#D2B471] rounded-lg shadow-xl max-w-6xl mx-auto mt-20 flex flex-col md:flex-row transition-all duration-300 hover:shadow-3xl">
                <div className="w-full">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#0F2C59] mb-4">О компании</h1>
                    <p className="text-gray-700 mb-6">
                        <strong>«АЛЬФА-КОНСАЛТ»</strong> — более 5 лет на рынке. Мы предоставляем полный комплекс бухгалтерских и кадровых услуг для бизнеса любого масштаба.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-semibold text-[#0F2C59] mb-2">Специализация</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Оптовая торговля</li>
                        <li>Розничная торговля</li>
                        <li>Продажи на маркетплейсах</li>
                        <li>Грузоперевозки</li>
                        <li>Кадровое делопроизводство и расчёт зарплаты</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;