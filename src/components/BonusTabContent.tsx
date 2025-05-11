import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BonusTabContent = () => {
  return (
    <div className="p-8 text-center">
      <Card className="bg-teender-dark border-teender-primary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-water-pattern opacity-5 pointer-events-none"></div>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-playfair">
            <div className="flex items-center justify-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12.5C21.9179 13.5472 21.0782 14.5578 19.7221 15.0452C18.254 15.5326 16.6739 15.5051 14.8196 15.0452C13.7382 14.7597 12.6158 14.2174 11.3272 14.1075C10.6031 14.0526 9.73082 14.1625 9.03407 14.4206C8.27642 14.7061 7.97065 15.1385 7.9845 15.5709C7.9845 15.6259 7.9845 15.6809 7.99835 15.7358C8.06743 16.0488 8.32627 16.3068 8.64589 16.4442C9.24806 16.6748 9.97341 16.6748 10.6167 16.6748M22 12.5C22 11.4528 21.1603 10.4422 19.8042 9.9548C18.3361 9.46737 16.756 9.49488 14.9017 9.9548C13.8203 10.2403 12.6979 10.7826 11.4093 10.8925C10.6852 10.9474 9.81292 10.8375 9.11617 10.5794C8.35852 10.2939 8.05275 9.86153 8.0666 9.4291C8.0666 9.37409 8.0666 9.31907 8.08045 9.26406C8.14953 8.95105 8.40837 8.69303 8.72799 8.55552C9.33016 8.32501 10.0555 8.32501 10.6988 8.32501"
                  stroke="#FF7D54"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Бонусная программа
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          {/* Bubbles animation */}
          <div className="absolute bottom-20 right-20 h-4 w-4 rounded-full bg-teender-accent/50 animate-bubbles"></div>
          <div className="absolute bottom-10 right-40 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles delay-1000"></div>

          <div className="text-xl max-w-2xl mx-auto mb-8">
            Зарегистрируйтесь сейчас и получите эксклюзивные бонусы для новых
            игроков!
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-teender-dark/50 border border-teender-primary/20 rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teender-primary to-teender-secondary rounded-full flex items-center justify-center mb-4">
                <Icon
                  name="Coins"
                  fallback="CircleDollarSign"
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">Приветственный бонус</h3>
              <p className="text-center text-gray-400">
                200% на первый депозит до 50,000₽
              </p>
            </div>

            <div className="bg-teender-dark/50 border border-teender-primary/20 rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teender-accent to-teender-accent/80 rounded-full flex items-center justify-center mb-4">
                <Icon
                  name="Sparkles"
                  fallback="Dices"
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">Фриспины</h3>
              <p className="text-center text-gray-400">
                50 бесплатных вращений на лучшие слоты
              </p>
            </div>

            <div className="bg-teender-dark/50 border border-teender-primary/20 rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teender-success to-teender-secondary rounded-full flex items-center justify-center mb-4">
                <Icon name="Trophy" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Кэшбэк</h3>
              <p className="text-center text-gray-400">
                Еженедельный возврат до 15% от проигрыша
              </p>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-teender-accent to-teender-accent/80 text-white hover:opacity-90 transition-opacity font-medium text-lg px-8 py-6">
            <Icon name="Gift" className="mr-2" />
            Получить бонус
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BonusTabContent;
