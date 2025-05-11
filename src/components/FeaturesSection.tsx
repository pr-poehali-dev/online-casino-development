
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-[#222433] to-[#1A1F2C] border border-[#333333] shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#9b87f5] rounded-full flex items-center justify-center">
                <Icon name="Shield" size={24} />
              </div>
              <h3 className="ml-4 text-xl font-playfair font-bold">
                Безопасность
              </h3>
            </div>
            <p className="text-gray-300">
              Мы гарантируем полную безопасность ваших данных и финансов.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#222433] to-[#1A1F2C] border border-[#333333] shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#FEC6A1] rounded-full flex items-center justify-center">
                <Icon
                  name="Banknote"
                  size={24}
                  className="text-[#1A1F2C]"
                />
              </div>
              <h3 className="ml-4 text-xl font-playfair font-bold">
                Быстрые выплаты
              </h3>
            </div>
            <p className="text-gray-300">
              Получайте свои выигрыши в кратчайшие сроки без задержек.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#222433] to-[#1A1F2C] border border-[#333333] shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#6E59A5] rounded-full flex items-center justify-center">
                <Icon
                  name="HeadphonesIcon"
                  size={24}
                  fallback="Headphones"
                />
              </div>
              <h3 className="ml-4 text-xl font-playfair font-bold">
                Поддержка 24/7
              </h3>
            </div>
            <p className="text-gray-300">
              Наша служба поддержки всегда готова помочь вам в любое время
              суток.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturesSection;
