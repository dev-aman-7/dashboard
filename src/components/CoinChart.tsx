import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CoinLineChartProps {
  data: number[][];
}

const CoinLineChart = ({ data }: CoinLineChartProps) => {
  // transfor data into {time, price} format
  const formattedData = data.map(([timestamp, price]) => ({
    time: new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    price: parseFloat(price.toFixed(2)),
  }));

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      className={
        "bg-background rounded-[8px] py-4 hover:shadow-lg transition-all"
      }
    >
      <LineChart data={formattedData}>
        <XAxis dataKey="time" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CoinLineChart;
