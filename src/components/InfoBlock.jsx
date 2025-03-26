import React from 'react';

export const InfoBlock = () => (
  /* Верхняя часть блока предложения */
  <div className="grid grid-cols-2 sm:flex sm:justify-around gap-4 mb-6 text-[#3b8e96]">
    {[
      { value: '7', label: 'лет работы' },
      { value: '20', label: 'клиентов' },
      { value: '197', label: 'проектов' },
      { value: '21', label: 'специалист' },
    ].map((item, index) => (
      <div key={index} className="text-center p-2">
        <div className="text-xl sm:text-2xl font-bold">{item.value}</div>
        <div className="text-xs sm:text-sm">{item.label}</div>
      </div>
    ))}
  </div>
);