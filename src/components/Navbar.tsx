import { Bell } from "lucide-react";
import BrandLogo from "./Logo";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="w-full p-4 bg-background flex items-center justify-between px-6 fixed top-0 z-40">
      <div className="flex items-center gap-4">
        <h1 className="font-medium text-secondary-foreground hidden md:block">
          Welcome, Guest
        </h1>
        <BrandLogo className="text-center md:hidden" />
      </div>
      <div className="flex items-center gap-4">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <Bell className="size-5" />
      </div>
    </div>
  );
};

export default Navbar;
