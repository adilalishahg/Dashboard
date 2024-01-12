import React from "react";
import { useTheme } from "./ThemeContext";
import { NavLink } from "react-router-dom";
const Card = ({ data }) => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={`${
        !data?.path
          ? "w-2/5 h-[9.5rem] border  flex flex-col justify-center p-4"
          : ""
      }  ${isDarkTheme ? "text-gray-200" : "text-gray-700"}`}
    >
      {data?.icon && <data.icon />}
      <span>{data?.name}</span>
      <span className={`${isDarkTheme ? "text-gray-100 " : "text-gray-500"}`}>
        {data?.value}
      </span>
    </div>
  );
};

export default Card;
