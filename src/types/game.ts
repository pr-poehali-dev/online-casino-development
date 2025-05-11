
export interface Game {
  id: number;
  title: string;
  image: string;
  provider: string;
  rating: number;
}

export interface Slot {
  id: number;
  title: string;
  image: string;
  provider: string;
  volatility: string;
  rtp: string;
  jackpot?: boolean;
}
