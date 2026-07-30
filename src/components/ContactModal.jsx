import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    consent: false
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Указываем путь к нашему PHP скрипту на сервере
      // Если тестируете на локальном ПК, форма выдаст ошибку CORS (это нормально). 
      // Она заработает сразу после загрузки на хостинг.
      // Можно вписать полный путь: 'https://aa-consult.ru/send.php'
      const response = await fetch('https://aa-consult.ru/send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          comment: formData.comment
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', comment: '', consent: false });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error(result.message || 'Ошибка сервера');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Контейнер модального окна */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative flex flex-col max-h-[90vh]">
        
        {/* Кнопка закрытия */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-red-500 transition-colors z-10"
        >
          ✕
        </button>

        {/* Картинка-шапка */}
        <div className="h-40 sm:h-48 w-full bg-gray-200 relative shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Бухгалтерские услуги" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Тело формы */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
              <h3 className="text-2xl font-bold text-[#0F2C59] mb-2">Спасибо!</h3>
              <p className="text-gray-600">Ваша заявка успешно отправлена. Наш специалист свяжется с вами в ближайшее время.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-center text-[#0F2C59] mb-6 leading-tight">
                Оставьте ваши контактные данные и наш специалист свяжется в ближайшее время
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Имя */}
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Имя"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B471] focus:ring-2 focus:ring-[#D2B471]/20 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Телефон */}
                <div className="relative flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-[#D2B471] focus-within:ring-2 focus-within:ring-[#D2B471]/20 transition-all bg-white">
                  <div className="flex items-center px-3 bg-gray-50 border-r border-gray-300">
                    <span className="text-lg mr-1">🇷🇺</span>
                    <span className="text-gray-600 text-sm font-medium">+7</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(000) 000-00-00"
                    className="w-full px-4 py-3 outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Комментарий */}
                <div>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Комментарий"
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D2B471] focus:ring-2 focus:ring-[#D2B471]/20 outline-none transition-all resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>

                {/* Чекбокс согласия */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center pt-1">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="w-5 h-5 border-2 border-gray-300 rounded text-[#0F2C59] focus:ring-[#D2B471] cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-500 leading-tight group-hover:text-gray-700 transition-colors">
                    Я даю согласие на обработку персональных данных в соответствии с <a href="#" className="text-[#D2B471] hover:underline">политикой конфиденциальности</a>
                  </span>
                </label>

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.consent}
                  className="w-full py-3.5 mt-2 bg-[#0F2C59] text-white rounded-lg font-semibold text-lg hover:bg-[#D2B471] transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;