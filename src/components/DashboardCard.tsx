import { Card, CardContent } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DashboardCard = ({ title, value, icon }: DashboardCardProps) => {
  return (
    <Card className="p-6 bg-background text-accent shadow-none rounded-[8px] border-none overflow-hidden hover:shadow-lg transition-all">
      <CardContent className="flex items-center justify-start gap-4">
        <div>{icon}</div>
        <div>
          <p className="text-2xl font-bold text-muted-foreground">{value}</p>
          <h2 className="text-sm font-semibold text-muted-foreground/60">
            {title}
          </h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
