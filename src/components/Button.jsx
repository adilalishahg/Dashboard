import { useTheme } from "./ThemeContext";
const Button = ({ children, type, onClick }) => {
  const { isDarkTheme } = useTheme();
  console.log(type);
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 ml-2 ${
        isDarkTheme
          ? "text-black bg-[#9af7a1]"
          : "text-white bg-blue-500 hover:bg-blue-600"
      }    rounded-md `}
    >
      {children}{" "}
    </button>
  );
};

export default Button;
