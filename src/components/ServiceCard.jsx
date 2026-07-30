// ServiceCard.jsx
import React from 'react';
import { HexagonWithIcon } from './HexagonWithIcon';

export const ServiceCard = ({ title, children }) => (
  <div className="bg-white p-4 rounded-lg border border-[#3b8e96]/20">
    <div className="relative">
      <div className="font-bold text-lg mb-3 text-[#3b8e96]">{title}</div>
      <div className="flex items-center mb-4">
        <div className="flex-1 h-[2px] bg-[#3b8e96]"></div>
        <div className="ml-2">
          <HexagonWithIcon title={title} />
        </div>
      </div>
    </div>
    <div className="space-y-2 text-sm max-w-164">
      {children}
    </div>
  </div>
);