import React, { useState } from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ServicesGrid from './components/ServicesGrid';
import Vacancies from './components/Vacancies';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './components/HeroSection';
import ContactModal from './components/ContactModal'; // Импортируем модалку

const App = () => {
  // Состояние для управления модальным окном
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Передаем функцию открытия в Header, чтобы можно было привязать к кнопке */}
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main>
        <HeroSection />
        <AboutUs />
        
        {/* Кнопка вызова формы между блоками (Опционально, для повышения конверсии) */}
        <div className="container mx-auto px-4 text-center mt-12 mb-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#D2B471] text-[#0F2C59] px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#0F2C59] hover:text-[#D2B471] transition-all transform hover:-translate-y-1"
          >
            Получить консультацию специалиста
          </button>
        </div>

        <ServicesGrid />
        <Vacancies />
      </main>
      
      <Footer />
      <ScrollToTop />

      {/* Сам компонент модального окна (видим только если isModalOpen === true) */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
export default App;