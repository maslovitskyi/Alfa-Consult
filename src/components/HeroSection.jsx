import React from 'react';
import background from '../assets/background.jpg'
const HeroSection = () => {
    /* часть сайта с задним Фоном */
    return (
        <div 
            className="w-full h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/background.jpg')" }}
        >
            <div className="ml-10 text-white text-3xl font-bold md:text-7xl">
                <div>Услуги 1С, ИТ-аутсорсинг</div>
                <div>Сопровождение 1С</div>
            </div>
        </div>
    );
};

export default HeroSection;