import React from 'react';
import { InfoBlock } from './InfoBlock';
import { ServiceCard } from './ServiceCard';

const servicesData = [
  /* Данные для блока Предложений*/
  {
    title: 'Проектные работы 1С',
    image: '/img/project-icon.png',
    content: (
      <>
        <div>Внедрение 1С:Бухгалтерия, 1С:Упр. торговлей, 1С:ЗУП, 1С:Розница, Бюджетирование</div>
        <div>Ставка часа от <span className="font-semibold text-[#3b8e96]">2500</span> руб</div>
        <div>Гарантия на работы</div>
        <div>Внедрение по технологии <span className="font-semibold text-[#3b8e96]">SCRUM</span></div>
      </>
    )
  },
  {
    title: 'Сопровождение 1С',
image: '/img/support-icon.png',
content: (
  <>
<div className="mb-4">
  <div className="flex flex-col sm:flex-row sm:justify-end mb-2">
    <div className="flex justify-between sm:mr-2.5 sm:gap-16 w-full sm:w-auto">
      <span className="font-semibold text-[#3b8e96] sm:w-24 text-center sm:-mr-2">Продление</span>
      <span className="font-semibold text-gray-800 sm:w-24 text-center sm:mr-2">Возобновление</span>
    </div>
  </div>
  
  <div className="space-y-3">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <span className="mb-1 sm:mb-0 sm:flex-1">1С:КП Базовый на 1 месяц</span>
      <div className="flex justify-between sm:gap-16">
        <span className="font-semibold text-[#3b8e96] w-1/2 sm:w-24 text-left sm:text-left">17 600 руб.</span>
        <span className="font-semibold text-gray-800 w-1/2 sm:w-24 text-center sm:text-left">21 600 руб.</span>
      </div>
    </div>
    
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <span className="mb-1 sm:mb-0 sm:flex-1">1С:КП Базовый на 3 месяца</span>
      <div className="flex justify-between sm:gap-16">
        <span className="font-semibold text-[#3b8e96] w-1/2 sm:w-24 text-left sm:text-left">30 500 руб.</span>
        <span className="font-semibold text-gray-800 w-1/2 sm:w-24 text-center sm:text-left">36 500 руб.</span>
      </div>
    </div>
    
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <span className="mb-1 sm:mb-0 sm:flex-1">1С:КП Базовый на 6 месяцев</span>
      <div className="flex justify-between sm:gap-16">
        <span className="font-semibold text-[#3b8e96] w-1/2 sm:w-24 text-left sm:text-left">30 500 руб.</span>
        <span className="font-semibold text-gray-800 w-1/2 sm:w-24 text-center sm:text-left">36 500 руб.</span>
      </div>
    </div>
  </div>
</div>
  </>
)
  },
  {
    title: 'Продажа программ 1С',
    image: '/img/purchase-icon.png',
    content: (
      <>
      
        <div className="flex justify-between">
          <span>1С:Бухгалтерия</span>
          <span className="font-semibold text-[#3b8e96]">17 600 руб.</span>
        </div>
        <div className="flex justify-between">
          <span>1С:Упр. торговлей</span>
          <span className="font-semibold text-[#3b8e96]">30 500 руб.</span>
        </div>
        <div className="flex justify-between">
          <span>1С:ЗУП</span>
          <span className="font-semibold text-[#3b8e96]">30 500 руб.</span>
        </div>
        <div className="flex justify-between">
          <span>1С:Розница</span>
          <span className="font-semibold text-[#3b8e96]">17 600 руб.</span>
        </div>
      </>
    )
  },
  {
    title: 'ИТ-аутсорсинг',
    image: '/img/it-icon.png',
    content: (
      <>
        <div>Время реакции <span className="font-semibold text-[#3b8e96]">5</span> мин</div>
        <div>Аудит безопасности</div>
        <div>Финансовые гарантии</div>
        <div>Сопровождение ИТ инфраструктуры</div>
        <div>Аренда серверов от <span className="font-semibold text-[#3b8e96]">2000</span> руб./мес.</div>
      </>
    )
  },
  {
    title: 'Услуги адаптации программ 1С',
    image: '/img/purchase-icon.png',
    content: (
      <>
        
        <div>Абонентское сопровождение от <span className="font-semibold text-[#3b8e96]">20000</span> руб.</div>
        <div>Время реакции <span className="font-semibold text-[#3b8e96]">15</span> мин</div>
        <div>Финансовые гарантии</div>
      </>
    )
  },
  {
    title: 'Альфа-Решения',
    image: '/logo1.svg',
    content: (
      <>
        <div className="flex justify-between">
          <span>Альфа:Мониторинг</span>
          <span className="font-semibold text-[#3b8e96]"></span>
        </div>
        <div className="flex justify-between">
          <span>Альфа:Лояльность</span>
          <span className="font-semibold text-[#3b8e96]"></span>
        </div>
        <div className="flex justify-between">
          <span>Альфа:Аудит</span>
          <span className="font-semibold text-[#3b8e96]"></span>
        </div>
      </>
    )
  },
];

export const ServicesGrid = () => (
  <div id="services-grid" className='pt-18 -mt-8'>
  <div className="rounded-xl shadow-2xl bg-white text-black p-6 space-y-6 mx-auto my-8 
    max-w-[90%] w-full border-2 border-[#3b8e96] transition-all duration-300 hover:shadow-3xl" >
    <InfoBlock />
    
    <div className="border-b border-[#3b8e96]/30 mb-8 mx-4"></div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          image={service.image}
        >
          {service.content}
        </ServiceCard>
      ))}
    </div>
  </div>
  </div>
);
export default ServicesGrid