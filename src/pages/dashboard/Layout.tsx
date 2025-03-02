import BrandLogo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import NavMenu from "@/components/Navmenu";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export const DashobardLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${cn(
        "w-full min-h-screen grid grid-cols-[0px_1fr] md:grid-cols-[220px_1fr] xl:grid-cols-[250px_1fr] overflow-hidden",
        className
      )}`}
    >
      {/* Sidebar */}
      <div className="w-full bg-background flex flex-col space-y-4 py-3">
        <BrandLogo className="text-center" />
        <div className="w-full h-full">
          <NavMenu />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full h-full flex flex-col overflow-hidden relative">
        <Navbar />
        <div className="container bg-secondary overflow-y-auto h-screen absolute top-0 pt-20">
          {children}
          <Toaster />
        </div>
      </div>
    </div>
  );
};
