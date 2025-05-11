import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import GameTabs from "@/components/GameTabs";
import PopularSlotsSection from "@/components/PopularSlotsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { popularGames, newGames, popularSlots } from "@/data/gameData";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroBanner />

        {/* Game tabs section with various game categories */}
        <GameTabs
          popularGames={popularGames}
          newGames={newGames}
          popularSlots={popularSlots}
        />

        {/* Popular slots section with compact cards */}
        <div className="container mx-auto px-4">
          <PopularSlotsSection slots={popularSlots} />

          {/* Features section */}
          <FeaturesSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
