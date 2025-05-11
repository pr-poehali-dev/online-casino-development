
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TournamentTabContent = () => {
  return (
    <div className="p-8 text-center">
      <Card className="bg-[#222222] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-playfair">
            Ближайшие турниры
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Участвуйте в захватывающих турнирах и выигрывайте ценные
            призы!
          </p>
          <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity">
            Смотреть турниры
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TournamentTabContent;
