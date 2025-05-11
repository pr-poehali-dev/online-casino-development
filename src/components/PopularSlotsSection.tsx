
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Slot {
  id: number;
  title: string;
  image: string;
  provider: string;
  volatility: string;
  rtp: string;
  jackpot?: boolean;
}

interface PopularSlotsSectionProps {
  slots: Slot[];
}

const PopularSlotsSection = ({ slots }: PopularSlotsSectionProps) => {
  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-playfair font-bold">
          Популярные слоты
        </h2>
        <Button
          variant="outline"
          className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
        >
          Смотреть все
          <Icon name="ArrowRight" className="ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {slots.map((slot) => (
          <div
            key={slot.id}
            className="relative group overflow-hidden rounded-md"
          >
            <img
              src={slot.image}
              alt={slot.title}
              className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs bg-[#9b87f5] px-2 py-0.5 rounded text-white">
                  {slot.provider}
                </span>
                {slot.jackpot && (
                  <span className="text-xs bg-[#FEC6A1] px-2 py-0.5 rounded text-[#1A1F2C] font-medium animate-pulse">
                    ДЖЕКПОТ
                  </span>
                )}
              </div>
              <h3 className="text-sm font-bold text-white truncate">
                {slot.title}
              </h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity"
                size="sm"
              >
                Играть
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSlotsSection;
