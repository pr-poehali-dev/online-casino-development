
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Slot {
  id: number;
  title: string;
  image: string;
  provider: string;
  volatility: string;
  rtp: string;
  jackpot?: boolean;
}

interface SlotCardProps {
  slot: Slot;
}

const SlotCard = ({ slot }: SlotCardProps) => {
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
          src={slot.image} 
          alt={slot.title} 
          className="w-full h-48 object-cover" 
        />
        {slot.jackpot && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-[#FEC6A1] to-[#FDE1D3] text-[#1A1F2C] font-bold animate-pulse">
              ДЖЕКПОТ
            </Badge>
          </div>
        )}
        <Badge className="absolute top-3 right-3 bg-[#9b87f5] text-white font-medium">
          {slot.provider}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white font-playfair leading-tight">{slot.title}</h3>
          
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Волатильность:</span>
              <div className="flex items-center">
                <VolatilityIndicator volatility={slot.volatility} />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">RTP:</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-[#FEC6A1] font-medium text-sm flex items-center">
                      {slot.rtp}
                      <Icon name="InfoIcon" size={14} className="ml-1 text-gray-400" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#333333] border-[#444444]">
                    <p>Процент возврата игроку (Return to Player)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="flex items-center justify-between pt-2">
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
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper component for volatility display
const VolatilityIndicator = ({ volatility }: { volatility: string }) => {
  let dots = 1;
  
  switch (volatility) {
    case "Низкая":
      dots = 1;
      break;
    case "Средняя":
      dots = 2;
      break;
    case "Высокая":
      dots = 3;
      break;
    case "Очень высокая":
      dots = 4;
      break;
    default:
      dots = 1;
  }
  
  return (
    <div className="flex items-center space-x-1">
      <span className="text-sm font-medium text-gray-300 mr-1">{volatility}</span>
      {[...Array(4)].map((_, i) => (
        <div 
          key={i} 
          className={`w-1.5 h-1.5 rounded-full ${i < dots ? 'bg-[#FEC6A1]' : 'bg-gray-600'}`} 
        />
      ))}
    </div>
  );
};

export default SlotCard;
