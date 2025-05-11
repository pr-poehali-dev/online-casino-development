import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-teender-dark py-8 px-4 border-t border-teender-primary/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-wave-pattern bg-repeat-x opacity-10 transform rotate-180"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-teender-primary to-teender-secondary rounded-full flex items-center justify-center mr-2 relative overflow-hidden">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-swim"
                >
                  <path
                    d="M22 12.5C21.9179 13.5472 21.0782 14.5578 19.7221 15.0452C18.254 15.5326 16.6739 15.5051 14.8196 15.0452C13.7382 14.7597 12.6158 14.2174 11.3272 14.1075C10.6031 14.0526 9.73082 14.1625 9.03407 14.4206C8.27642 14.7061 7.97065 15.1385 7.9845 15.5709C7.9845 15.6259 7.9845 15.6809 7.99835 15.7358C8.06743 16.0488 8.32627 16.3068 8.64589 16.4442C9.24806 16.6748 9.97341 16.6748 10.6167 16.6748M22 12.5C22 11.4528 21.1603 10.4422 19.8042 9.9548C18.3361 9.46737 16.756 9.49488 14.9017 9.9548C13.8203 10.2403 12.6979 10.7826 11.4093 10.8925C10.6852 10.9474 9.81292 10.8375 9.11617 10.5794C8.35852 10.2939 8.05275 9.86153 8.0666 9.4291C8.0666 9.37409 8.0666 9.31907 8.08045 9.26406C8.14953 8.95105 8.40837 8.69303 8.72799 8.55552C9.33016 8.32501 10.0555 8.32501 10.6988 8.32501M7.5 5.5C7.5 7.433 6.433 9 5 9C3.567 9 2.5 7.433 2.5 5.5C2.5 3.567 3.567 2 5 2C6.433 2 7.5 3.567 7.5 5.5ZM6.5 19C6.5 20.105 5.605 21 4.5 21C3.395 21 2.5 20.105 2.5 19C2.5 17.895 3.395 17 4.5 17C5.605 17 6.5 17.895 6.5 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              TEENDER Casino
            </h3>
            <p className="text-gray-400">
              Лучшее онлайн-казино с морской тематикой. Погрузись в глубины
              азарта вместе с нами!
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Игры</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-teender-accent cursor-pointer transition-colors">
                Слоты
              </li>
              <li className="hover:text-teender-accent cursor-pointer transition-colors">
                Рулетка
              </li>
              <li className="hover:text-teender-accent cursor-pointer transition-colors">
                Блэкджек
              </li>
              <li className="hover:text-teender-accent cursor-pointer transition-colors">
                Покер
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-teender-accent cursor-pointer transition-colors">
                О нас
              </li>
              <li className="hover:text-teender-accent cursor-pointer transition-colors">
                Правила и условия
              </li>
              <li className="hover:text-teender-accent cursor-pointer transition-colors">
                Ответственная игра
              </li>
              <li className="hover:text-teender-accent cursor-pointer transition-colors">
                Политика конфиденциальности
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Связаться с нами</h4>
            <div className="flex space-x-4 mb-4">
              <div className="w-10 h-10 bg-teender-primary rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Icon name="Mail" size={18} />
              </div>
              <div className="w-10 h-10 bg-teender-primary rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Icon name="MessageCircle" size={18} />
              </div>
              <div className="w-10 h-10 bg-teender-primary rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={18} />
              </div>
            </div>
            <p className="text-gray-400">support@teender.com</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-teender-primary/30 text-center text-gray-500 relative">
          <div className="absolute top-0 left-1/4 h-2 w-2 rounded-full bg-teender-accent/30 animate-bubbles"></div>
          <div className="absolute top-2 left-1/3 h-3 w-3 rounded-full bg-teender-accent/30 animate-bubbles delay-500"></div>
          <div className="absolute top-0 left-2/3 h-2 w-2 rounded-full bg-teender-accent/30 animate-bubbles delay-750"></div>
          <p>© 2025 TEENDER Casino. Все права защищены. 18+</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
