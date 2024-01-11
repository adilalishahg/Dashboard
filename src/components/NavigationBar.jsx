import React from "react";
import Logo from "../assets/logo.png";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircle,
} from "lucide-react";
const navLinks = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Activity", icon: Clock3, path: "/activity" },
  { name: "Transactions", icon: BarChart2, path: "/transactions" },
  { name: "Analytics", icon: ArrowRightLeft, path: "/analytics" },
  { name: "Help Center", icon: HelpCircle, path: "/helpcenter" },
];
const NavigationBar = () => {
  const [activeNavIndex, setActiveNavIndex] = React.useState(0);
  //   console.log(activeNavItem);
  return (
    <div className="flex flex-col w-1/5 h-screen px-10 py-12 border border-r-1">
      <div className="flex items-center space-x-3 logo-div">
        <img style={{ maxWidth: "6rem" }} src={Logo} />
        <span>Money Tracker</span>
      </div>
      <div className="flex flex-col mt-10 space-y-8">
        {navLinks &&
          navLinks.map((item, index) => (
            <div
              key={index}
              className={`flex space-x-4 p-4 rounded cursor-pointer ${
                index === activeNavIndex
                  ? "bg-[#f19898] text-white font-semibold"
                  : ""
              }`}
              onClick={() => setActiveNavIndex(index)}
            >
              <item.icon />
              <span>{item?.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NavigationBar;
