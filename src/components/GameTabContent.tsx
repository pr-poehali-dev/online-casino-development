
import GameCard from "@/components/GameCard";

interface Game {
  id: number;
  title: string;
  image: string;
  provider: string;
  rating: number;
}

interface GameTabContentProps {
  games: Game[];
}

const GameTabContent = ({ games }: GameTabContentProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameTabContent;
