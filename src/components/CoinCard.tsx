import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CoinCardProps {
  coin: any;
}
const CoinCard = ({ coin }: CoinCardProps) => {
  return (
    <Card className="w-full bg-background shadow-none border-none rounded-[8px] hover:shadow-lg transition-all">
      <CardHeader className="flex flex-row items-center gap-4">
        <img src={coin.image} alt={coin.name} width={50} height={50} />
        <CardTitle className="text-lg font-semibold">
          {coin.name} ({coin.symbol})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full justify-center flex items-end gap-2">
          <p className="text-center text-2xl font-semibold">
            {coin.price_change_percentage_24h > 0 ? (
              <span className="text-green-500">
                +{coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="text-red-500">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </p>
          <span className="mb-1 text-muted-foreground text-xs font-semibold">
            24h
          </span>
        </div>
        <p className="text-center text-sm text-gray-500">
          #{coin.id.toUpperCase()}
        </p>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
