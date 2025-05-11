import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GameTabContent from "@/components/GameTabContent";
import SlotTabContent from "@/components/SlotTabContent";
import BonusTabContent from "@/components/BonusTabContent";
import TournamentTabContent from "@/components/TournamentTabContent";

// Types
interface Game {
  id: number;
  title: string;
  image: string;
  provider: string;
  rating: number;
}

interface Slot {
  id: number;
  title: string;
  image: string;
  provider: string;
  volatility: string;
  rtp: string;
  jackpot?: boolean;
}

interface GameTabsProps {
  popularGames: Game[];
  newGames: Game[];
  popularSlots: Slot[];
}

const GameTabs = ({ popularGames, newGames, popularSlots }: GameTabsProps) => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="container mx-auto py-12 px-4 relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-playfair font-bold flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12.5C21.9179 13.5472 21.0782 14.5578 19.7221 15.0452C18.254 15.5326 16.6739 15.5051 14.8196 15.0452C13.7382 14.7597 12.6158 14.2174 11.3272 14.1075C10.6031 14.0526 9.73082 14.1625 9.03407 14.4206C8.27642 14.7061 7.97065 15.1385 7.9845 15.5709C7.9845 15.6259 7.9845 15.6809 7.99835 15.7358C8.06743 16.0488 8.32627 16.3068 8.64589 16.4442C9.24806 16.6748 9.97341 16.6748 10.6167 16.6748M22 12.5C22 11.4528 21.1603 10.4422 19.8042 9.9548C18.3361 9.46737 16.756 9.49488 14.9017 9.9548C13.8203 10.2403 12.6979 10.7826 11.4093 10.8925C10.6852 10.9474 9.81292 10.8375 9.11617 10.5794C8.35852 10.2939 8.05275 9.86153 8.0666 9.4291C8.0666 9.37409 8.0666 9.31907 8.08045 9.26406C8.14953 8.95105 8.40837 8.69303 8.72799 8.55552C9.33016 8.32501 10.0555 8.32501 10.6988 8.32501M7.5 5.5C7.5 7.433 6.433 9 5 9C3.567 9 2.5 7.433 2.5 5.5C2.5 3.567 3.567 2 5 2C6.433 2 7.5 3.567 7.5 5.5ZM6.5 19C6.5 20.105 5.605 21 4.5 21C3.395 21 2.5 20.105 2.5 19C2.5 17.895 3.395 17 4.5 17C5.605 17 6.5 17.895 6.5 19Z"
              stroke="#0F85A3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Наши игры
        </h2>
        <Button className="bg-gradient-to-r from-teender-primary to-teender-secondary hover:opacity-90 transition-opacity">
          <Icon name="Search" className="mr-2" />
          Поиск игр
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 bg-teender-dark/50 border-b border-teender-primary/30 w-full justify-start">
          <TabsTrigger
            value="popular"
            className="text-lg px-6 py-3 data-[state=active]:text-teender-accent data-[state=active]:border-b-2 data-[state=active]:border-teender-accent"
          >
            Популярные
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="text-lg px-6 py-3 data-[state=active]:text-teender-accent data-[state=active]:border-b-2 data-[state=active]:border-teender-accent"
          >
            Новинки
          </TabsTrigger>
          <TabsTrigger
            value="slots"
            className="text-lg px-6 py-3 data-[state=active]:text-teender-accent data-[state=active]:border-b-2 data-[state=active]:border-teender-accent"
          >
            Слоты
          </TabsTrigger>
          <TabsTrigger
            value="bonuses"
            className="text-lg px-6 py-3 data-[state=active]:text-teender-accent data-[state=active]:border-b-2 data-[state=active]:border-teender-accent"
          >
            Бонусы
          </TabsTrigger>
          <TabsTrigger
            value="tournaments"
            className="text-lg px-6 py-3 data-[state=active]:text-teender-accent data-[state=active]:border-b-2 data-[state=active]:border-teender-accent"
          >
            Турниры
          </TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="mt-0">
          <GameTabContent games={popularGames} />
        </TabsContent>

        <TabsContent value="new" className="mt-0">
          <GameTabContent games={newGames} />
        </TabsContent>

        <TabsContent value="slots" className="mt-0">
          <SlotTabContent slots={popularSlots} />
        </TabsContent>

        <TabsContent value="bonuses" className="mt-0">
          <BonusTabContent />
        </TabsContent>

        <TabsContent value="tournaments" className="mt-0">
          <TournamentTabContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GameTabs;
