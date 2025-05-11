import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
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
    <Card className="overflow-hidden bg-teender-dark border-teender-primary/30 hover:shadow-lg transition-all hover:scale-[1.02] duration-300 group relative">
      <div className="absolute top-0 left-0 w-full h-full bg-water-pattern opacity-5 pointer-events-none"></div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-teender-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="w-full">
            <Button
              className="w-full bg-gradient-to-r from-teender-accent to-teender-accent/80 hover:opacity-90 transition-opacity mb-2"
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
        <Badge className="absolute top-3 right-3 bg-teender-primary text-white font-medium">
          {game.provider}
        </Badge>
      </div>
      <CardContent className="p-4 relative">
        <h3 className="text-lg font-bold text-white font-playfair leading-tight">
          {game.title}
        </h3>
        <div className="flex items-center mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={16}
                className={`${i < Math.floor(game.rating) ? "text-teender-accent" : "text-gray-600"}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-300">
            {game.rating.toFixed(1)}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-teender-primary/20 hover:bg-teender-primary/30 transition-colors">
            <Icon name="Heart" size={16} className="text-gray-300" />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-teender-primary/20 hover:bg-teender-primary/30 transition-colors">
            <Icon name="Share2" size={16} className="text-gray-300" />
          </button>
        </div>
        <div className="animate-pulse inline-block p-1 bg-gradient-to-r from-teender-primary to-teender-secondary rounded-full group-hover:animate-none transition-all">
          <div className="bg-teender-dark rounded-full p-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12.5C21.9179 13.5472 21.0782 14.5578 19.7221 15.0452C18.254 15.5326 16.6739 15.5051 14.8196 15.0452C13.7382 14.7597 12.6158 14.2174 11.3272 14.1075C10.6031 14.0526 9.73082 14.1625 9.03407 14.4206C8.27642 14.7061 7.97065 15.1385 7.9845 15.5709C7.9845 15.6259 7.9845 15.6809 7.99835 15.7358C8.06743 16.0488 8.32627 16.3068 8.64589 16.4442C9.24806 16.6748 9.97341 16.6748 10.6167 16.6748M22 12.5C22 11.4528 21.1603 10.4422 19.8042 9.9548C18.3361 9.46737 16.756 9.49488 14.9017 9.9548C13.8203 10.2403 12.6979 10.7826 11.4093 10.8925C10.6852 10.9474 9.81292 10.8375 9.11617 10.5794C8.35852 10.2939 8.05275 9.86153 8.0666 9.4291C8.0666 9.37409 8.0666 9.31907 8.08045 9.26406C8.14953 8.95105 8.40837 8.69303 8.72799 8.55552C9.33016 8.32501 10.0555 8.32501 10.6988 8.32501"
                stroke="#0F85A3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
