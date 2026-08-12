import React from 'react';

/*
  Общие свойства SVG-иконок
*/
const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};


/*
  Иконка финансовой безопасности
  Щит + галочка
*/
const SecurityIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 5
         L53 13
         V29
         C53 43 44 53 32 59
         C20 53 11 43 11 29
         V13
         L32 5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M20 31
         L28 39
         L45 22"
      {...iconProps}
      strokeWidth="2.5"
    />
  </svg>
);


/*
  Иконка профессионализма
  Человек + шестерёнка
*/
const ProfessionalIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Голова */}
    <circle
      cx="27"
      cy="20"
      r="8"
      {...iconProps}
    />

    {/* Тело */}
    <path
      d="M12 47
         C12 37 18 31 27 31
         C36 31 42 37 42 47"
      {...iconProps}
    />

    {/* Шестерёнка */}
    <circle
      cx="46"
      cy="43"
      r="7"
      {...iconProps}
    />

    <path
      d="M46 32
         V35
         M46 51
         V54
         M35 43
         H38
         M54 43
         H57
         M38.2 35.2
         L40.4 37.4
         M51.6 48.6
         L53.8 50.8
         M53.8 35.2
         L51.6 37.4
         M40.4 48.6
         L38.2 50.8"
      {...iconProps}
      strokeWidth="1.7"
    />

    <circle
      cx="46"
      cy="43"
      r="2.5"
      {...iconProps}
    />
  </svg>
);


/*
  Иконка современных инструментов
  Документ + шестерёнка
*/
const DocumentsIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Документ */}
    <path
      d="M16 7
         H38
         L49 18
         V48
         C49 51 47 53 44 53
         H16
         C13 53 11 51 11 48
         V12
         C11 9 13 7 16 7Z"
      {...iconProps}
    />

    {/* Загнутый угол */}
    <path
      d="M38 7
         V18
         H49"
      {...iconProps}
    />

    {/* Строки документа */}
    <path
      d="M19 27 H38
         M19 34 H38
         M19 41 H31"
      {...iconProps}
    />

    {/* Маленькая шестерёнка */}
    <circle
      cx="44"
      cy="45"
      r="6"
      fill="white"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    <circle
      cx="44"
      cy="45"
      r="2"
      {...iconProps}
    />

    <path
      d="M44 36
         V39
         M44 51
         V54
         M35 45
         H38
         M50 45
         H53
         M37.6 38.6
         L39.7 40.7
         M48.3 49.3
         L50.4 51.4
         M50.4 38.6
         L48.3 40.7
         M39.7 49.3
         L37.6 51.4"
      {...iconProps}
      strokeWidth="1.5"
    />
  </svg>
);


/*
  Иконка связи
  Два диалоговых сообщения
*/
const CommunicationIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Основное сообщение */}
    <path
      d="M9 12
         C9 9 11 7 14 7
         H43
         C46 7 48 9 48 12
         V31
         C48 34 46 36 43 36
         H28
         L18 45
         V36
         H14
         C11 36 9 34 9 31
         V12Z"
      {...iconProps}
    />

    {/* Второе сообщение */}
    <path
      d="M23 36
         V45
         C23 48 25 50 28 50
         H42
         L49 56
         V50
         H51
         C54 50 56 48 56 45
         V34"
      {...iconProps}
    />

    {/* Точки */}
    <circle cx="19" cy="21.5" r="1.5" fill="currentColor" />
    <circle cx="28" cy="21.5" r="1.5" fill="currentColor" />
    <circle cx="37" cy="21.5" r="1.5" fill="currentColor" />
  </svg>
);


/*
  Компонент одной иконки
*/
const VacancyIcon = ({ type }) => {

  const icons = {
    security: SecurityIcon,
    professional: ProfessionalIcon,
    documents: DocumentsIcon,
    communication: CommunicationIcon,
  };

  const Icon = icons[type];

  if (!Icon) return null;

  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 text-[#D2B471]">
      <Icon className="w-full h-full" />
    </div>
  );
};


/*
  Основной компонент
*/
const Vacancies = () => {

  const advantages = [
    {
      icon: "security",
      text: "Мы гарантируем финансовую безопасность и берем ответственность за результат.",
    },
    {
      icon: "professional",
      text: "Мы регулярно повышаем квалификацию наших бухгалтеров и следим за изменениями в законах.",
    },
    {
      icon: "documents",
      text: "Мы предоставляем современные и надежные инструменты для работы с документами.",
    },
    {
      icon: "communication",
      text: "Мы работаем прозрачно и всегда на связи, чтобы оперативно решать любые вопросы.",
    },
  ];

  return (
    <section
      id="vacancies"
      className="pt-5 -mt-8 mb-8"
    >
      <div
        className="
          p-5 sm:p-8
          bg-white
          border-2 border-[#D2B471]
          rounded-lg
          shadow-xl
          max-w-6xl
          mx-auto
          mt-20
          transition-all
          duration-300
          hover:shadow-3xl
        "
      >

        <div className="space-y-6">

          {/* Заголовок */}
          <div className="w-full text-center">
            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-[#0F2C59]
                mb-6
              "
            >
              Наш бизнес — ваше спокойствие и уверенность
            </h2>
          </div>


          {/* Описание */}
          <p className="text-gray-700 mb-8 text-center max-w-5xl mx-auto">
            Наша компания основана профессионалами, поэтому мы хорошо понимаем
            ценность грамотного ведения учета. Мы берем на себя всю рутину,
            чтобы вы могли уверенно развивать свой бизнес, не беспокоясь о
            налогах, отчетах и проверках.
          </p>


          {/* Преимущества */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
              sm:gap-6
              mb-8
            "
          >

            {advantages.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-lg
                  border
                  border-[#D2B471]/30
                  hover:border-[#D2B471]
                  transition-all
                  duration-300
                "
              >

                {/* SVG */}
                <VacancyIcon type={item.icon} />

                {/* Текст */}
                <span className="text-gray-700 leading-relaxed">
                  {item.text}
                </span>

              </div>
            ))}

          </div>


          {/* Итоговый блок */}
          <div className="border-l-4 border-[#D2B471] pl-4 mt-8">
            <p className="text-gray-700 font-semibold">
              <span className="text-[#0F2C59]">
                На первом месте для нас стоят:
              </span>{" "}
              результат, конфиденциальность и эффективность!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Vacancies;