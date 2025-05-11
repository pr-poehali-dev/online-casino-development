
import SlotCard from "@/components/SlotCard";

interface Slot {
  id: number;
  title: string;
  image: string;
  provider: string;
  volatility: string;
  rtp: string;
  jackpot?: boolean;
}

interface SlotTabContentProps {
  slots: Slot[];
}

const SlotTabContent = ({ slots }: SlotTabContentProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {slots.map((slot) => (
        <SlotCard key={slot.id} slot={slot} />
      ))}
    </div>
  );
};

export default SlotTabContent;
