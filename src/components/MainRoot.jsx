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
    <div className={`w-full flex ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Components */}
      <main className="grow">
        <div className="flex flex-col px-14 py-4 space-y-4 justify-end items-end ">
          <span className="rounded-full flex items-center space-x-3">
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
        <div className="flex flex-col py-12 px-14 space-y-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainRoot;
