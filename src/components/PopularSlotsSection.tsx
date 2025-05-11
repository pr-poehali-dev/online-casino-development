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
        <h2 className="text-3xl font-playfair font-bold flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 5.5C7.5 7.433 6.433 9 5 9C3.567 9 2.5 7.433 2.5 5.5C2.5 3.567 3.567 2 5 2C6.433 2 7.5 3.567 7.5 5.5ZM6.5 19C6.5 20.105 5.605 21 4.5 21C3.395 21 2.5 20.105 2.5 19C2.5 17.895 3.395 17 4.5 17C5.605 17 6.5 17.895 6.5 19Z"
              stroke="#FF7D54"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12.5C21.9179 13.5472 21.0782 14.5578 19.7221 15.0452C18.254 15.5326 16.6739 15.5051 14.8196 15.0452C13.7382 14.7597 12.6158 14.2174 11.3272 14.1075C10.6031 14.0526 9.73082 14.1625 9.03407 14.4206C8.27642 14.7061 7.97065 15.1385 7.9845 15.5709C7.9845 15.6259 7.9845 15.6809 7.99835 15.7358C8.06743 16.0488 8.32627 16.3068 8.64589 16.4442C9.24806 16.6748 9.97341 16.6748 10.6167 16.6748M22 12.5C22 11.4528 21.1603 10.4422 19.8042 9.9548C18.3361 9.46737 16.756 9.49488 14.9017 9.9548C13.8203 10.2403 12.6979 10.7826 11.4093 10.8925C10.6852 10.9474 9.81292 10.8375 9.11617 10.5794C8.35852 10.2939 8.05275 9.86153 8.0666 9.4291C8.0666 9.37409 8.0666 9.31907 8.08045 9.26406C8.14953 8.95105 8.40837 8.69303 8.72799 8.55552C9.33016 8.32501 10.0555 8.32501 10.6988 8.32501"
              stroke="#FF7D54"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Популярные слоты
        </h2>
        <Button
          variant="outline"
          className="border-teender-accent text-teender-accent hover:bg-teender-accent/10"
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
            <div className="absolute inset-0 bg-gradient-to-t from-teender-dark/80 via-teender-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            {/* Small bubbles animation */}
            <div className="absolute bottom-10 right-5 h-2 w-2 rounded-full bg-teender-accent/50 animate-bubbles"></div>
            <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-teender-accent/50 animate-bubbles delay-1000"></div>

            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs bg-teender-primary px-2 py-0.5 rounded text-white">
                  {slot.provider}
                </span>
                {slot.jackpot && (
                  <span className="text-xs bg-teender-accent px-2 py-0.5 rounded text-white font-medium animate-pulse">
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
                className="bg-gradient-to-r from-teender-accent to-teender-accent/80 hover:opacity-90 transition-opacity"
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
