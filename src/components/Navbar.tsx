import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full p-4 bg-background flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h1 className="font-medium text-secondary-foreground">
          Welcome, Guest
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Bell className="size-5" />
      </div>
    </div>
  );
};

export default Navbar;
