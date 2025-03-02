import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { menu } from "@/constant/menu";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-background p-4">
        <div className="text-xl font-bold mb-4">Menu</div>
        <nav className="flex flex-col gap-2">
          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.route}
              className="p-2 text-lg font-medium hover:bg-accent rounded-md transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
