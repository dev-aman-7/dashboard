import { ChartCandlestick, Globe, Percent, TrendingUp } from "lucide-react";
import "./App.css";
import DashboardCard from "./components/DashboardCard";
import { DashobardLayout } from "./pages/dashboard/Layout";
import CoinCard from "./components/CoinCard";
import { getCoins, getCointChart, getGlobalData } from "./service/coin";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import { MarketStat } from "./types/coin";
import CoinCardSkeleton from "./components/loading/CoinCard";
import DashboardCardSkeleton from "./components/loading/DashboardCard";
import CoinChart from "./components/CoinChart";

function App() {
  const [marketStats, setMarketStats] = useState<MarketStat[]>([]);
  const { data, loading } = useFetch({
    fetchFn: () =>
      getCoins({
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 4,
        sparkline: false,
      }),
  });

  const { data: globalData, loading: globalLoading } = useFetch({
    fetchFn: () => getGlobalData(),
    onError: (error) => console.error("Error fetching global data:", error),
  });

  const { data: chartData } = useFetch({
    fetchFn: () =>
      getCointChart("bitcoin", {
        vs_currency: "usd",
        days: "7",
        interval: "daily",
      }),
    dependencies: ["bitcoin"],
    onError: (error) => console.error("Error fetching chart data:", error),
  });

  useEffect(() => {
    if (!globalData) return;
    console.log("globalData----", globalData);
    setMarketStats([
      {
        title: "Total Market Cap",
        value: `$${(
          (globalData as any)?.data?.total_market_cap.usd / 1e12
        ).toFixed(2)}T`,
        icon: <TrendingUp size={24} className="text-green-500" />,
      },
      {
        title: "Total Volume",
        value: `$${((globalData as any)?.data?.total_volume.usd / 1e9).toFixed(
          2
        )}B`,
        icon: <ChartCandlestick size={24} className="text-blue-500" />,
      },
      {
        title: "Market Cap Percentage",
        value: `${(globalData as any)?.data?.market_cap_percentage.btc.toFixed(
          2
        )}%`,
        icon: <Percent size={24} className="text-yellow-500" />,
      },
      {
        title: "Active Cryptos",
        value: (
          globalData as any
        )?.data?.active_cryptocurrencies.toLocaleString(),
        icon: <Globe size={24} className="text-purple-500" />,
      },
    ]);
  }, [globalData]);

  return (
    <DashobardLayout>
      <div className="flex flex-col space-y-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {loading
            ? new Array(4)
                .fill(null)
                .map((_, index) => <CoinCardSkeleton key={index} />)
            : marketStats.map((stat, index) => (
                <DashboardCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                />
              ))}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalLoading
            ? new Array(4)
                .fill(null)
                .map((_, index) => <DashboardCardSkeleton key={index} />)
            : data &&
              (data as any)?.data.map((coin: any) => (
                <CoinCard key={coin.id} coin={coin} />
              ))}
        </div>

        <div className="w-full">
          <CoinChart data={chartData?.data.prices || []} />
        </div>
      </div>
    </DashobardLayout>
  );
}

export default App;
