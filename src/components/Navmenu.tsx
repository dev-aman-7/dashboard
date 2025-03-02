import { menu } from "@/constant/menu";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="w-full h-full flex flex-col mt-4">
      {menu.map((item) => (
        <Link to={item.route} key={item.name}>
          <div
            className={`w-full p-2 text-foreground px-6 font-medium hover:border-popover hover:bg-foreground/10 ease-in transition-all border-l-4 ${
              item.active
                ? "bg-gradient-to-r from-foreground/20 to-foreground/2 border-popover"
                : "border-transparent"
            }`}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
