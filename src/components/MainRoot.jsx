import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { useTheme } from "./ThemeContext";

import { LogOut, Sun, Moon } from "lucide-react";
{
  /* <Sun size={28} strokeWidth={1} absoluteStrokeWidth /><Moon size={28} strokeWidth={1} absoluteStrokeWidth /> */
}
const MainRoot = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`w-full h-full flex ${
        isDarkTheme ? "darkTheme" : "lightTheme"
      }`}
    >
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Components */}
      <main className="border-l grow">
        <div className="flex flex-col items-end justify-end py-4 space-y-4 px-14 ">
          <span className="flex items-center space-x-3 rounded-full">
            <button onClick={toggleTheme}>
              {isDarkTheme ? (
                <Sun size={28} strokeWidth={1} absoluteStrokeWidth />
              ) : (
                <Moon size={28} strokeWidth={1} absoluteStrokeWidth />
              )}
            </button>
            <LogOut size={28} strokeWidth={1} absoluteStrokeWidth />
          </span>
        </div>
        <div className="flex flex-col pb-12 space-y-4 px-14">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainRoot;
