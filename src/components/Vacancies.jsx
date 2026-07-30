import React from 'react';
import vac1 from '../assets/vacancy-icon-1.png'
import vac2 from '../assets/vacancy-icon-2.png'
import vac3 from '../assets/vacancy-icon-3.png'
import vac4 from '../assets/vacancy-icon-4.png'

const Vacancies = () => {
    return (
        <section id='vacancies' className='pt-5 -mt-8 mb-8'>
            <div className="p-8 bg-white border-2 border-[#D2B471] rounded-lg shadow-xl max-w-6xl mx-auto mt-20 transition-all duration-300 hover:shadow-3xl">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F2C59] mb-6">Наш бизнес — ваше спокойствие и уверенность</h2>
                    
                    <p className="text-gray-700 mb-8">
                        Наша компания основана профессионалами, поэтому мы хорошо понимаем ценность грамотного ведения учета. 
                        Мы берем на себя всю рутину, чтобы вы могли уверенно развивать свой бизнес, не беспокоясь о налогах,
                        отчетах и проверках. 
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {[
                            {icon: vac1, text: 'Мы гарантируем финансовую безопасность и берем ответственность за результат.'},
                            {icon: vac2, text: 'Мы регулярно повышаем квалификацию наших бухгалтеров и следим за изменениями в законах.'},
                            {icon: vac3, text: 'Мы предоставляем современные и надежные инструменты для работы с документами.'},
                            {icon: vac4, text: 'Мы работаем прозрачно и всегда на связи, чтобы оперативно решать любые вопросы.'},
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <img src={item.icon} alt="icon" className="w-12 h-12" />
                                <span className="text-gray-700">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-l-4 border-[#D2B471] pl-4 mt-8">
                        <p className="text-gray-700 font-semibold">
                            <span className="text-[#0F2C59]">На первом месте для нас стоят:</span> 
                            результат, конфиденциальность и эффективность!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vacancies;