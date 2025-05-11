import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TournamentTabContent = () => {
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
                  d="M7.5 5.5C7.5 7.433 6.433 9 5 9C3.567 9 2.5 7.433 2.5 5.5C2.5 3.567 3.567 2 5 2C6.433 2 7.5 3.567 7.5 5.5Z"
                  stroke="#0F85A3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 19C6.5 20.105 5.605 21 4.5 21C3.395 21 2.5 20.105 2.5 19C2.5 17.895 3.395 17 4.5 17C5.605 17 6.5 17.895 6.5 19Z"
                  stroke="#FF7D54"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 12.5C21.9179 13.5472 21.0782 14.5578 19.7221 15.0452C18.254 15.5326 16.6739 15.5051 14.8196 15.0452C13.7382 14.7597 12.6158 14.2174 11.3272 14.1075C10.6031 14.0526 9.73082 14.1625 9.03407 14.4206C8.27642 14.7061 7.97065 15.1385 7.9845 15.5709C7.9845 15.6259 7.9845 15.6809 7.99835 15.7358C8.06743 16.0488 8.32627 16.3068 8.64589 16.4442C9.24806 16.6748 9.97341 16.6748 10.6167 16.6748M22 12.5C22 11.4528 21.1603 10.4422 19.8042 9.9548C18.3361 9.46737 16.756 9.49488 14.9017 9.9548C13.8203 10.2403 12.6979 10.7826 11.4093 10.8925C10.6852 10.9474 9.81292 10.8375 9.11617 10.5794C8.35852 10.2939 8.05275 9.86153 8.0666 9.4291C8.0666 9.37409 8.0666 9.31907 8.08045 9.26406C8.14953 8.95105 8.40837 8.69303 8.72799 8.55552C9.33016 8.32501 10.0555 8.32501 10.6988 8.32501"
                  stroke="#0F85A3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Активные турниры
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          {/* Bubbles animation */}
          <div className="absolute bottom-20 left-20 h-4 w-4 rounded-full bg-teender-accent/50 animate-bubbles"></div>
          <div className="absolute bottom-10 left-40 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles delay-1000"></div>

          <div className="text-xl max-w-2xl mx-auto mb-8">
            Участвуйте в захватывающих турнирах и выигрывайте ценные призы!
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="bg-teender-primary/10 border-teender-primary/30 overflow-hidden relative group">
              <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles group-hover:opacity-100 opacity-0"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-playfair font-bold">
                    Морские глубины
                  </h3>
                  <span className="bg-teender-accent/20 text-teender-accent px-2 py-1 rounded-md text-sm">
                    Активен
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Призовой фонд</p>
                    <p className="text-xl font-bold">1 000 000 ₽</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Участников</p>
                    <p className="text-xl font-bold">243</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Дата начала</p>
                    <p className="text-lg">12.05.2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Дата окончания</p>
                    <p className="text-lg">18.05.2025</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-teender-primary to-teender-secondary hover:opacity-90 transition-opacity">
                  Участвовать
                </Button>
              </div>
            </Card>

            <Card className="bg-teender-primary/10 border-teender-primary/30 overflow-hidden relative group">
              <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles group-hover:opacity-100 opacity-0"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-playfair font-bold">
                    Охота за сокровищами
                  </h3>
                  <span className="bg-teender-success/20 text-teender-success px-2 py-1 rounded-md text-sm">
                    Новый
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Призовой фонд</p>
                    <p className="text-xl font-bold">500 000 ₽</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Участников</p>
                    <p className="text-xl font-bold">112</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Дата начала</p>
                    <p className="text-lg">15.05.2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Дата окончания</p>
                    <p className="text-lg">22.05.2025</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-teender-accent to-teender-accent/80 hover:opacity-90 transition-opacity">
                  Участвовать
                </Button>
              </div>
            </Card>
          </div>

          <Button
            variant="outline"
            className="border-teender-primary text-teender-primary hover:bg-teender-primary/10 font-medium"
          >
            <Icon name="ListFilter" className="mr-2" />
            Смотреть все турниры
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TournamentTabContent;
