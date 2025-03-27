import React from 'react';
import vac1 from '../assets/vacancy-icon-1.png'
import vac2 from '../assets/vacancy-icon-2.png'
import vac3 from '../assets/vacancy-icon-3.png'
import vac4 from '../assets/vacancy-icon-4.png'

const Vacancies = () => {
    /* Блок вакансии */
    return (
        <section id='vacancies' className='pt-5 -mt-8 mb-3'>
        <div  className="p-8 bg-white border-2 border-[#3b8e96] rounded-lg shadow-xl max-w-6xl mx-auto mt-20 transition-all duration-300 hover:shadow-3xl">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-[#3b8e96] mb-4">Вакансии</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Наш бизнес — это ваш успех!</h2>
                
                <p className="text-gray-700 mb-8">
                    Наша компания основана профессионалами, поэтому мы хорошо понимаем ценность специалистов высокого уровня. 
                    Хотя каждый из нас посвящает работе значительное время, нам важно, чтобы мы не только зарабатывали, 
                    но и делились знаниями, идеями и хорошим настроением.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                        {icon: vac1, text: 'Мы сохраняем допустимо возможные варианты выбора рабочего графика.'},
                        {icon: vac2, text: 'Мы не экономим на знаниях и приветствуем желание повышать квалификацию.'},
                        {icon: vac3, text: 'Мы предоставляем все необходимое для комфортной и продуктивной работы.'},
                        {icon: vac4, text: 'Мы соблюдаем ТК РФ и достойно оцениваем работу каждого сотрудника.'},
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <img src={item.icon} alt="icon" className="w-12 h-12" />
                            <span className="text-gray-700">{item.text}</span>
                        </div>
                    ))}
                </div>

                <div className="border-l-4 border-[#3b8e96] pl-4 my-8">
                    <p className="text-gray-700 font-semibold">
                        <span className="text-[#3b8e96]">На первом месте для нас стоят:</span> 
                        результат и эффективность!
                    </p>
                </div>

                <div className="space-y-8">
                    <h3 className="text-xl font-semibold text-[#3b8e96]">Мы всегда рады следующим специалистам:</h3>
                    
                    <div className="space-y-6">
                        {[/* Добавление новых вакансий или удаление старых */
                            {
                                title: 'Менеджер IT–Проектов',
                                experience: 'высокая квалификация',
                                skills: 'Управления IT–Проектами, риск-менеджмент, делопроизводство, MS Project, OpenProj, MS Office, Xmind, 1C, redmine, Битрикс24, Axure RP'
                            },
                            {
                                title: 'PHP программист',
                                experience: 'высокая квалификация',
                                skills: 'PHP, ООП, «Битрикс», MySQL, Javascript (Jqurery, Ajax), CCS + HTML'
                            },
                            {
                                title: '1С программист 8.х',
                                experience: 'высокая квалификация',
                                skills: 'разработки и адаптации конфигураций 1С:Управление торговлей 10.3/11 и 1С:Бухгалтерия 3.0, знания бизнес-процессов в предметной области (торговля, бух. учет), работы с конфигурацией "Конвертация данных"'
                            }
                        ].map((vacancy, index) => (
                            <div key={index} className="border rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-semibold text-[#3b8e96] mb-4">{vacancy.title}</h4>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-4 items-center">
                                        <span className="text-gray-600">Опыт:</span>
                                        <span className="text-gray-700">{vacancy.experience}</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-4 items-center">
                                        <span className="text-gray-600">Приветствуются навыки:</span>
                                        <span className="text-gray-700">{vacancy.skills}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Vacancies;