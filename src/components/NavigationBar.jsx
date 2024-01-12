import React from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircle,
  ChevronRight,
  Cross,
  Car,
  ChevronLeft,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
const navLinks = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Trip", icon: Cross, path: "/trip" },
  { name: "Trips", icon: Car, path: "/trips" },
  { name: "Transactions", icon: BarChart2, path: "/transactions" },
  { name: "Analytics", icon: ArrowRightLeft, path: "/analytics" },
  { name: "Help Center", icon: HelpCircle, path: "/helpcenter" },
];
const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "2%" },
};
const NavigationBar = () => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const { isDarkTheme } = useTheme();
  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={`flex flex-col w-1/5 800px:hidden h-full ${
        isExpanded ? " px-10" : " px-12 items-center"
      } py-10  relative`}
    >
      <NavLink to={"/"}>
        {" "}
        <div className="flex items-center space-x-3 logo-div">
          <img style={{ maxWidth: "6rem" }} src={Logo} className="w-12 " />{" "}
          <span className={`font-bold ${isExpanded ? "block" : "hidden"}`}>
            Money Tracker
          </span>
        </div>
      </NavLink>
      <div
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
        className={`w-5 h-5 ${
          isDarkTheme ? "bg-[#9af7a1]" : "bg-[#f19898]"
        } rounded-full absolute -right-[0.70rem] top-20 flex items-center justify-center`}
      >
        {isExpanded ? (
          <ChevronLeft
            className={`${
              isDarkTheme ? "text-black" : "text-white"
            } mr-[0.1rem]`}
          />
        ) : (
          <ChevronRight
            className={`${isDarkTheme ? "text-black" : "text-white"} `}
          />
        )}
      </div>
      <div className={`flex flex-col mt-10 space-y-8`}>
        {navLinks &&
          navLinks.map((item, index) => (
            <NavLink
              to={item?.path}
              key={index}
              className={({ isActive, isPending }) =>
                ` ${isPending ? "pending" : ""} ${
                  isActive
                    ? !isDarkTheme
                      ? "bg-[#f19898] text-black"
                      : "bg-[#9af7a1] text-black font-bold"
                    : ""
                } `
              }
            >
              <div
                className={`flex space-x-4 p-4 rounded cursor-pointer 
                 `}
              >
                <item.icon className="block" />
                <span className={isExpanded ? " block" : "hidden"}>
                  {item?.name}
                </span>
              </div>
            </NavLink>
          ))}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
