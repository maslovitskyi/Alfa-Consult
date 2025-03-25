import React, { useState } from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ServicesGrid from './components/ServicesGrid';
import Vacancies from './components/Vacancies';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './components/HeroSection';

const App = () => {
  
  return (
    <div>
      <Header />
      <main>
      <HeroSection />
      <AboutUs />
      <ServicesGrid />
      <Vacancies />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
export default App