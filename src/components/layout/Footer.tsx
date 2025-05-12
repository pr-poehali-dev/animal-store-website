
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Paw" className="h-6 w-6 text-[#9B87F5]" />
              <span className="font-bold text-xl text-white">ЗооДруг</span>
            </div>
            <p className="text-gray-400">
              Ваш надежный помощник в выборе товаров для домашних животных
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для собак</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для кошек</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для птиц</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для грызунов</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Возврат и обмен</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" className="h-4 w-4 text-[#9B87F5]" />
                <span>г. Москва, ул. Примерная, 123</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4 text-[#9B87F5]" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4 text-[#9B87F5]" />
                <span>info@zoofriend.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 ЗооДруг. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
