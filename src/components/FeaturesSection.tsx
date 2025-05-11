import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-teender-dark to-teender-dark/80 border border-teender-primary/30 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-water-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles group-hover:opacity-100 opacity-0"></div>
          <div className="absolute -bottom-2 -left-2 h-2 w-2 rounded-full bg-teender-accent/50 animate-bubbles delay-700 group-hover:opacity-100 opacity-0"></div>

          <CardContent className="p-6 relative">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teender-primary rounded-full flex items-center justify-center">
                <Icon name="Shield" size={24} />
              </div>
              <h3 className="ml-4 text-xl font-playfair font-bold">
                Безопасность
              </h3>
            </div>
            <p className="text-gray-300">
              Мы гарантируем полную безопасность ваших данных и финансов с
              использованием продвинутых технологий шифрования.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teender-dark to-teender-dark/80 border border-teender-primary/30 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-water-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles group-hover:opacity-100 opacity-0"></div>
          <div className="absolute -bottom-2 -left-2 h-2 w-2 rounded-full bg-teender-accent/50 animate-bubbles delay-700 group-hover:opacity-100 opacity-0"></div>

          <CardContent className="p-6 relative">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teender-accent rounded-full flex items-center justify-center">
                <Icon name="Banknote" size={24} className="text-white" />
              </div>
              <h3 className="ml-4 text-xl font-playfair font-bold">
                Быстрые выплаты
              </h3>
            </div>
            <p className="text-gray-300">
              Получайте свои выигрыши в кратчайшие сроки без задержек. Мы ценим
              ваше время и комфорт.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teender-dark to-teender-dark/80 border border-teender-primary/30 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-water-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles group-hover:opacity-100 opacity-0"></div>
          <div className="absolute -bottom-2 -left-2 h-2 w-2 rounded-full bg-teender-accent/50 animate-bubbles delay-700 group-hover:opacity-100 opacity-0"></div>

          <CardContent className="p-6 relative">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teender-secondary rounded-full flex items-center justify-center">
                <Icon name="HeadphonesIcon" size={24} fallback="Headphones" />
              </div>
              <h3 className="ml-4 text-xl font-playfair font-bold">
                Поддержка 24/7
              </h3>
            </div>
            <p className="text-gray-300">
              Наша служба поддержки всегда готова помочь вам в любое время
              суток. Мы работаем без выходных.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturesSection;
