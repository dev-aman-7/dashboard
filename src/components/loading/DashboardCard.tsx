import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardCardSkeleton = () => {
  return (
    <Card className="p-6 min-h-44 bg-background shadow-none rounded-[8px] border-none overflow-hidden">
      <CardContent className="flex items-center justify-start gap-4">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div>
          <Skeleton className="w-20 h-6 mb-2" />
          <Skeleton className="w-32 h-4" />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCardSkeleton;
