import React from 'react';

export const HexagonWithIcon = ({ title }) => {
  const getIconPath = () => {
    // Настройки для всех иконок (одинаковая толщина для единства стиля)
    const iconProps = {
      stroke: "currentColor",
      strokeWidth: "2", 
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none"
    };

    switch(title) {
      case 'Консультации':
        // Идеальное центрирование (4.8, 4.8) для scale(0.6)
        return (
          <g transform="translate(4.8, 4.8) scale(0.6)" {...iconProps}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </g>
        );
      case 'Бухгалтерское обслуживание':
        return (
          <g transform="translate(4.8, 4.8) scale(0.6)" {...iconProps}>
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="16" y1="14" x2="16.01" y2="14" />
            <line x1="8" y1="10" x2="8.01" y2="10" />
            <line x1="12" y1="10" x2="12.01" y2="10" />
            <line x1="16" y1="10" x2="16.01" y2="10" />
            <line x1="8" y1="14" x2="8.01" y2="14" />
            <line x1="12" y1="14" x2="12.01" y2="14" />
            <line x1="8" y1="18" x2="8.01" y2="18" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
            <line x1="16" y1="18" x2="16.01" y2="18" />
          </g>
        );
      case 'Сдача отчётности':
        return (
          <g transform="translate(4.8, 4.8) scale(0.6)" {...iconProps}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <polyline points="9 15 11 17 15 13" />
          </g>
        );
      case 'Бухгалтерский аутсорсинг':
        return (
          <g transform="translate(4.8, 4.8) scale(0.6)" {...iconProps}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </g>
        );
      case 'Кадровое делопроизводство и расчёт зарплаты':
        // Масштаб увеличен до 0.8, вычислено точное смещение (1.2, 2.0)
        return (
          <g transform="translate(1.2, 2.0) scale(0.8)" {...iconProps} strokeWidth="1.5">
            {/* Человек (по центру) */}
            <circle cx="12" cy="8" r="3" />
            <path d="M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
            
            {/* Шестеренка (слева) */}
            <circle cx="5" cy="11" r="1.5" />
            <path d="M5 8.5v1 M5 12.5v1 M2.5 11h1 M6.5 11h1 M3.2 9.2l.7.7 M6.1 12.1l.7.7 M3.2 12.8l.7-.7 M6.1 9.9l.7-.7" />
            
            {/* Деньги / Купюра (справа) */}
            <rect x="16.8" y="8" width="8" height="6" rx="0.5" />
            
            {/* Знак рубля (₽) - сделан значительно толще (strokeWidth=2.5) */}
            <path d="M20 9.5v4 M20 9.5h1a1 1 0 0 1 0 2h-2 M19 12.5h2.5" strokeWidth="0.8" />
          </g>
        );
      case 'Разработка локальных нормативных актов':
        // Идеальное центрирование стопки бумаг
        return (
          <g transform="translate(4.5, 4.5) scale(0.6)" {...iconProps}>
            <path d="M9 8V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-3" />
            <rect x="5" y="8" width="11" height="14" rx="1" />
            <line x1="8" y1="13" x2="13" y2="13" />
            <line x1="8" y1="17" x2="13" y2="17" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <svg
      width="86"   /* Увеличили общий размер шестиугольника с 72 до 86 */
      height="86"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#D2B471]"
    >
      {/* Контур шестиугольника */}
      <path
        d="M12 1L22.3923 6.5V17.5L12 23L1.6077 17.5V6.5L12 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Внутренняя иконка */}
      {getIconPath()}
    </svg>
  );
};

export const InfoBlock = () => (
  <div className="grid grid-cols-2 sm:flex sm:justify-around gap-4 mb-6 text-[#0F2C59]">
    {[
      { value: '7', label: 'лет работы' },
      { value: '23', label: 'клиента' },
      { value: '197', label: 'проектов' },
      { value: '12', label: 'бухгалтеров' },
    ].map((item, index) => (
      <div key={index} className="text-center p-2">
        <div className="text-xl sm:text-2xl font-bold">{item.value}</div>
        <div className="text-xs sm:text-sm font-semibold text-[#D2B471]">{item.label}</div>
      </div>
    ))}
  </div>
);

export const ServiceCard = ({ title, children }) => (
  <div className="bg-white p-4 rounded-lg border border-[#D2B471]/50 shadow-sm hover:shadow-md transition-shadow">
    <div className="relative">
      <div className="font-bold text-lg mb-3 text-[#0F2C59] min-h-[56px] flex items-center">{title}</div>
      <div className="flex items-center mb-4">
        <div className="flex-1 h-[2px] bg-[#D2B471]"></div>
        <div className="ml-2">
          <HexagonWithIcon title={title} />
        </div>
      </div>
    </div>
    <div className="space-y-2 text-sm max-w-164 text-gray-700">
      {children}
    </div>
  </div>
);

const servicesData = [
  {
    title: 'Консультации',
    content: (
      <>
        <div>Устные и письменные консультации по вопросам налогообложения и учета</div>
        <div>Оценка и минимизация налоговых рисков</div>
        <div>Помощь в выборе оптимальной системы налогообложения</div>
        <div>Ставка часа от <span className="font-semibold text-[#0F2C59]">2500</span> руб.</div>
      </>
    )
  },
  {
    title: 'Бухгалтерское обслуживание',
    content: (
      <div className="w-full text-sm">
        {/* Шапка таблицы с выравниванием по правому краю */}
        <div className="flex justify-end gap-2 mb-2 border-b border-[#D2B471]/30 pb-1">
          <div className="w-24 text-center font-semibold text-[#0F2C59]">УСН</div>
          <div className="w-24 text-center font-semibold text-[#0F2C59]">ОСНО</div>
        </div>
        {/* Ряды таблицы с ровным выравниванием */}
        <div className="flex justify-between items-center mb-2 gap-2">
          <div className="flex-1 leading-tight">Обслуживание ИП</div>
          <div className="w-24 text-center font-medium">от 10 000 ₽</div>
          <div className="w-24 text-center font-medium">от 15 000 ₽</div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex-1 leading-tight">Обслуживание ООО</div>
          <div className="w-24 text-center font-medium">от 15 000 ₽</div>
          <div className="w-24 text-center font-medium">от 25 000 ₽</div>
        </div>
      </div>
    )
  },
  {
    title: 'Сдача отчётности',
    content: (
      <>
        <div className="flex justify-between border-b pb-1">
          <span>Подготовка и сдача отчетности (ФНС, ПФР, ФСС)</span>
        </div>
        <div className="flex justify-between border-b pb-1">
          <span>Сдача нулевой отчетности ИП/ООО</span>
        </div>
        <div className="flex justify-between border-b pb-1">
          <span>Сверка с бюджетом и налоговой</span>
        </div>
        <div className="flex justify-between">
          <span>Помощь в разблокировке расчетных счетов</span>
        </div>
      </>
    )
  },
  {
    title: 'Бухгалтерский аутсорсинг',
    content: (
      <>
        <div>Полное ведение бухгалтерского и налогового учета</div>
        <div>Обработка всей первичной документации</div>
        <div>Финансовые гарантии и защита перед налоговой</div>
        <div>Экономия на штатном бухгалтере и обустройстве рабочего места</div>
      </>
    )
  },
  {
    title: 'Кадровое делопроизводство и расчёт зарплаты',
    content: (
      <>
        <div>Оформление приемов, увольнений, отпусков и больничных</div>
        <div>Точный и своевременный расчет заработной платы</div>
        <div>Подготовка справок для сотрудников по запросу</div>
        <div>Ведение трудовых книжек (бумажных и электронных)</div>
      </>
    )
  },
  {
    title: 'Разработка локальных нормативных актов',
    content: (
      <>
        <div className="flex justify-between border-b pb-1">
          <span>Правила внутреннего трудового распорядка (ПВТР)</span>
        </div>
        <div className="flex justify-between border-b pb-1">
          <span>Положения об оплате труда и премировании</span>
        </div>
        <div className="flex justify-between border-b pb-1">
          <span>Составление должностных инструкций</span>
        </div>
        <div className="flex justify-between">
          <span>Договоры о материальной ответственности</span>
        </div>
      </>
    )
  },
];

export const ServicesGrid = () => (
  <div id="services-grid" className='pt-18 -mt-8'>
    <div className="rounded-xl shadow-2xl bg-white text-black p-6 space-y-6 mx-auto my-8 
      max-w-[90%] w-full border-2 border-[#D2B471] transition-all duration-300 hover:shadow-3xl" >
      <InfoBlock />
      
      <div className="border-b border-[#D2B471]/50 mb-8 mx-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
          >
            {service.content}
          </ServiceCard>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesGrid;