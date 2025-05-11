
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BonusTabContent = () => {
  return (
    <div className="p-8 text-center">
      <Card className="bg-[#222222] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-playfair">
            Бонусная программа
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Зарегистрируйтесь сейчас и получите эксклюзивные бонусы
            для новых игроков!
          </p>
          <Button className="bg-gradient-to-r from-[#FEC6A1] to-[#FDE1D3] text-[#1A1F2C] hover:opacity-90 transition-opacity font-medium">
            Получить бонус
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BonusTabContent;
