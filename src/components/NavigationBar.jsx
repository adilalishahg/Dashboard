import React from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
const navLinks = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Activity", icon: Clock3, path: "/activity" },
  { name: "Transactions", icon: BarChart2, path: "/transactions" },
  { name: "Analytics", icon: ArrowRightLeft, path: "/analytics" },
  { name: "Help Center", icon: HelpCircle, path: "/helpcenter" },
];
const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "2%" },
};
const NavigationBar = () => {
  const [activeNavIndex, setActiveNavIndex] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={`flex flex-col w-1/5 h-screen ${
        isExpanded ? " px-10" : " px-12 items-center"
      } py-12 border  border-r-1 relative`}
    >
      <div className="flex items-center space-x-3 logo-div">
        <img style={{ maxWidth: "6rem" }} src={Logo} className="mr-3 w-12" />
        <span className={isExpanded ? "block" : "hidden"}>Money Tracker</span>
      </div>
      <div
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
        className="w-5 h-5 bg-[#f19898] rounded-full absolute -right-[0.70rem] top-20 flex items-center justify-center"
      >
        <ChevronRight className="text-white" />
      </div>
      <div className={`flex flex-col mt-10 space-y-8`}>
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
              <item.icon className="block" />
              <span className={isExpanded ? "block" : "hidden"}>
                {item?.name}
              </span>
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
