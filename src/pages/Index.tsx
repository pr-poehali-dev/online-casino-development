
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import GameCard from '@/components/GameCard';

const popularGames = [
  {
    id: 1,
    title: "Золото Фараона",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
    provider: "Вулкан",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Космические Приключения",
    image: "https://images.unsplash.com/photo-1614729375290-b2a429dac01d?q=80&w=2070&auto=format&fit=crop",
    provider: "Мульти",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Дикий Запад",
    image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop",
    provider: "Фортуна",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Тропический Рай",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4814?q=80&w=2070&auto=format&fit=crop",
    provider: "Вулкан",
    rating: 4.6,
  },
];

const newGames = [
  {
    id: 5,
    title: "Мистический Лес",
    image: "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?q=80&w=2070&auto=format&fit=crop",
    provider: "Фортуна",
    rating: 4.7,
  },
  {
    id: 6,
    title: "Сокровища Пиратов",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop",
    provider: "Мульти",
    rating: 4.4,
  },
  {
    id: 7,
    title: "Вечерний Лас-Вегас",
    image: "https://images.unsplash.com/photo-1581112877330-5584a0e9d998?q=80&w=2070&auto=format&fit=crop",
    provider: "Вулкан",
    rating: 4.8,
  },
  {
    id: 8,
    title: "Магия Драконов",
    image: "https://images.unsplash.com/photo-1610070835223-0e08ba519e4d?q=80&w=2070&auto=format&fit=crop",
    provider: "Фортуна",
    rating: 4.9,
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroBanner />
        
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-playfair font-bold">Наши игры</h2>
            <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity">
              <Icon name="Search" className="mr-2" />
              Поиск игр
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 bg-[#222222] border-b border-[#333333] w-full justify-start">
              <TabsTrigger value="popular" className="text-lg px-6 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5]">
                Популярные
              </TabsTrigger>
              <TabsTrigger value="new" className="text-lg px-6 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5]">
                Новинки
              </TabsTrigger>
              <TabsTrigger value="bonuses" className="text-lg px-6 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5]">
                Бонусы
              </TabsTrigger>
              <TabsTrigger value="tournaments" className="text-lg px-6 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5]">
                Турниры
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="popular" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularGames.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newGames.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="bonuses" className="mt-0">
              <div className="p-8 text-center">
                <Card className="bg-[#222222] border-[#333333]">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-playfair">Бонусная программа</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Зарегистрируйтесь сейчас и получите эксклюзивные бонусы для новых игроков!</p>
                    <Button className="bg-gradient-to-r from-[#FEC6A1] to-[#FDE1D3] text-[#1A1F2C] hover:opacity-90 transition-opacity font-medium">
                      Получить бонус
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tournaments" className="mt-0">
              <div className="p-8 text-center">
                <Card className="bg-[#222222] border-[#333333]">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-playfair">Ближайшие турниры</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Участвуйте в захватывающих турнирах и выигрывайте ценные призы!</p>
                    <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity">
                      Смотреть турниры
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-[#222433] to-[#1A1F2C] border border-[#333333] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#9b87f5] rounded-full flex items-center justify-center">
                      <Icon name="Shield" size={24} />
                    </div>
                    <h3 className="ml-4 text-xl font-playfair font-bold">Безопасность</h3>
                  </div>
                  <p className="text-gray-300">Мы гарантируем полную безопасность ваших данных и финансов.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#222433] to-[#1A1F2C] border border-[#333333] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#FEC6A1] rounded-full flex items-center justify-center">
                      <Icon name="Banknote" size={24} className="text-[#1A1F2C]" />
                    </div>
                    <h3 className="ml-4 text-xl font-playfair font-bold">Быстрые выплаты</h3>
                  </div>
                  <p className="text-gray-300">Получайте свои выигрыши в кратчайшие сроки без задержек.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#222433] to-[#1A1F2C] border border-[#333333] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#6E59A5] rounded-full flex items-center justify-center">
                      <Icon name="HeadphonesIcon" size={24} fallback="Headphones" />
                    </div>
                    <h3 className="ml-4 text-xl font-playfair font-bold">Поддержка 24/7</h3>
                  </div>
                  <p className="text-gray-300">Наша служба поддержки всегда готова помочь вам в любое время суток.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-[#15171E] py-8 px-4 border-t border-[#333333]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Fortune Casino</h3>
              <p className="text-gray-400">Лучшее онлайн-казино с большим выбором игр и щедрыми бонусами.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Игры</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">Слоты</li>
                <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">Рулетка</li>
                <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">Блэкджек</li>
                <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">Покер</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">Правила и условия</li>
                <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">Ответственная игра</li>
                <li className="hover:text-[#9b87f5] cursor-pointer transition-colors">Политика конфиденциальности</li>
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
    </div>
  );
};

export default Index;
