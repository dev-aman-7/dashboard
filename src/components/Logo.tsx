import { cn } from "@/lib/utils";

const BrandLogo = ({ className }: { className?: string }) => {
  return (
    <h1 className={cn("text-2xl font-bold text-primary", className)}>
      Cloud<span className="text-yellow-300">Cache.</span>
    </h1>
  );
};

export default BrandLogo;
