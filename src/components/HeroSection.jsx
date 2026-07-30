import React from 'react';
import background from '../assets/background.png'
const HeroSection = () => {
    return (
        <div 
            className="w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            
            <div className="text-center text-white font-bold max-w-5xl px-4 -mt-32">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-xl">
                    Весь спектр <br />
                    бухгалтерских услуг
                </h1>
            </div>
        </div>
    );
};

export default HeroSection;