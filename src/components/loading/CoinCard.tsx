import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CoinCardSkeleton = () => {
  return (
    <Card className="w-full bg-background shadow-none border-none rounded-[8px]">
      <CardHeader className="flex flex-row items-center gap-4">
        <Skeleton className="w-[50px] h-[50px]" />
        <Skeleton className="w-1/2 h-[50px]" />
      </CardHeader>
    </Card>
  );
};

export default CoinCardSkeleton;
