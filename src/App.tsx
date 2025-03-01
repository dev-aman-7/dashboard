import { ChartCandlestick, Globe, Percent, TrendingUp } from "lucide-react";
import "./App.css";
import DashboardCard from "./components/DashboardCard";
import { DashobardLayout } from "./pages/dashboard/Layout";
import CoinCard from "./components/CoinCard";
import { getCoins, getGlobalData } from "./service/coin";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import { MarketStat } from "./types/coin";

function App() {
  const [marketStats, setMarketStats] = useState<MarketStat[]>([]);
  const { data, loading } = useFetch(getCoins, {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 4,
    sparkline: false,
  });

  const { data: globalData } = useFetch(getGlobalData);

  useEffect(() => {
    if (!globalData) return;

    setMarketStats([
      {
        title: "Total Market Cap",
        value: `$${((globalData as any).total_market_cap.usd / 1e12).toFixed(
          2
        )}T`,
        icon: <TrendingUp size={24} className="text-green-500" />,
      },
      {
        title: "Total Volume",
        value: `$${((globalData as any).total_volume.usd / 1e9).toFixed(2)}B`,
        icon: <ChartCandlestick size={24} className="text-blue-500" />,
      },
      {
        title: "Market Cap Percentage",
        value: `${(globalData as any).market_cap_percentage.btc.toFixed(2)}%`,
        icon: <Percent size={24} className="text-yellow-500" />,
      },
      {
        title: "Active Cryptos",
        value: (globalData as any).active_cryptocurrencies.toLocaleString(),
        icon: <Globe size={24} className="text-purple-500" />,
      },
    ]);
  }, [globalData]);

  return (
    <DashobardLayout>
      <div className="flex flex-col space-y-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {marketStats.map((stat, index) => (
            <DashboardCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data &&
            !loading &&
            (data as any[]).map((coin: any) => (
              <CoinCard key={coin.id} coin={coin} />
            ))}
        </div>
      </div>
    </DashobardLayout>
  );
}

export default App;
