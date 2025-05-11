
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
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-playfair font-bold">Наши игры</h2>
        <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity">
          <Icon name="Search" className="mr-2" />
          Поиск игр
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="mb-8 bg-[#222222] border-b border-[#333333] w-full justify-start">
          <TabsTrigger
            value="popular"
            className="text-lg px-6 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5]"
          >
            Популярные
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="text-lg px-6 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5]"
          >
            Новинки
          </TabsTrigger>
          <TabsTrigger
            value="slots"
            className="text-lg px-6 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5]"
          >
            Слоты
          </TabsTrigger>
          <TabsTrigger
            value="bonuses"
            className="text-lg px-6 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5]"
          >
            Бонусы
          </TabsTrigger>
          <TabsTrigger
            value="tournaments"
            className="text-lg px-6 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5]"
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
