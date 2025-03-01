import { ReactNode } from "react";

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  price_change_percentage_24h: number;
}

export interface HistoricalData {
  prices: number[][];
}

export interface GlobalData {
  total_market_cap: { usd: number };
  total_volume: { usd: number };
  market_cap_percentage: { btc: number };
  active_cryptocurrencies: number;
}

export interface MarketStat {
  title: string;
  value: string;
  icon: ReactNode;
}
