import React from "react";
import background from "../assets/background.png";

import {
  SoftwareIcon,
  AccountingIcon,
  ComputerIcon,
  RepairIcon,
  CashRegisterIcon,
} from "./CategoryIcons";

const categories = [
  {
    title: "Софт",
    icon: <SoftwareIcon />,
  },
  {
    title: "Бухучёт",
    icon: <AccountingIcon />,
  },
  {
    title: "Компьютеры",
    icon: <ComputerIcon />,
  },
  {
    title: "Ремонт",
    icon: <RepairIcon />,
  },
  {
    title: "Кассы",
    icon: <CashRegisterIcon />,
  },
];

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center -z-2"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Отступ под фиксированный Header */}
        <div className="h-32 md:h-36"></div>

        {/* Панель категорий */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200">

          <div className="grid grid-cols-3 md:grid-cols-5">

            {categories.map((item) => (
              <button
                key={item.title}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  justify-center
                  py-7
                  px-2
                  transition-all
                  duration-300
                  hover:bg-[#FAF8F2]
                "
              >
                <div
                  className="
                    mb-3
                    text-[#D2B471]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {item.icon}
                </div>

                <span
                  className="
                    text-[#0F2C59]
                    font-semibold
                    text-sm
                    md:text-base
                    text-center
                  "
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Заголовок */}
        <div
          className="
            flex
            justify-center
            items-center

            pt-16
            pb-20

            md:pt-24
            md:pb-32

            lg:pt-28
            lg:pb-40
          "
        >
          <div className="text-center">

            <h1
              className="
                text-white
                font-extrabold
                leading-tight
                drop-shadow-2xl

                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Весь спектр
              <br />
              бухгалтерских услуг
            </h1>

            <p
              className="
                mt-6
                text-white/90
                max-w-2xl
                mx-auto

                text-base
                md:text-xl
              "
            >
              Полный комплекс бухгалтерских, кадровых и IT-услуг для бизнеса любого масштаба.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;