
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { Button } from "@/components/ui/button";

interface Game {
  id: number;
  title: string;
  image: string;
  provider: string;
  rating: number;
}

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="overflow-hidden bg-[#222222] border-[#333333] hover:shadow-lg transition-all hover:scale-[1.02] duration-300 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="w-full">
            <Button 
              className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity mb-2"
              size="sm"
            >
              Играть сейчас
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="w-full border-white/30 text-white hover:bg-white/10"
            >
              Демо-режим
            </Button>
          </div>
        </div>
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-48 object-cover" 
        />
        <Badge className="absolute top-3 right-3 bg-[#9b87f5] text-white font-medium">
          {game.provider}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-white font-playfair leading-tight">{game.title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                name="Star" 
                size={16} 
                className={`${i < Math.floor(game.rating) ? 'text-[#FEC6A1]' : 'text-gray-600'}`} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-300">{game.rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-[#333333] hover:bg-[#444444] transition-colors">
            <Icon name="Heart" size={16} className="text-gray-300" />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-[#333333] hover:bg-[#444444] transition-colors">
            <Icon name="Share2" size={16} className="text-gray-300" />
          </button>
        </div>
        <div className="animate-pulse inline-block p-1 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-full group-hover:animate-none transition-all">
          <div className="bg-[#222222] rounded-full p-1">
            <Icon name="Zap" size={16} className="text-[#9b87f5]" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
