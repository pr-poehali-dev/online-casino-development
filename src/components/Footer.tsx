
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-[#15171E] py-8 px-4 border-t border-[#333333]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">
              Fortune Casino
            </h3>
            <p className="text-gray-400">
              Лучшее онлайн-казино с большим выбором игр и щедрыми бонусами.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Игры</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">
                Слоты
              </li>
              <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">
                Рулетка
              </li>
              <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">
                Блэкджек
              </li>
              <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">
                Покер
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">
                О нас
              </li>
              <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">
                Правила и условия
              </li>
              <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">
                Ответственная игра
              </li>
              <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">
                Политика конфиденциальности
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Связаться с нами</h4>
            <div className="flex space-x-4 mb-4">
              <div className="w-10 h-10 bg-[#9b87f5] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Icon name="Mail" size={18} />
              </div>
              <div className="w-10 h-10 bg-[#9b87f5] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Icon name="MessageCircle" size={18} />
              </div>
              <div className="w-10 h-10 bg-[#9b87f5] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={18} />
              </div>
            </div>
            <p className="text-gray-400">support@fortunecasino.com</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#333333] text-center text-gray-500">
          <p>© 2025 Fortune Casino. Все права защищены. 18+</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
