/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        darkTheme: "#1a202c", // Replace with your dark theme background color
        lightTheme: "#1a202c", // Replace with your dark theme background color
      },
      textColor: {
        darkTheme: "#ffffff", // Replace with your dark theme text color
        lightTheme: "#ffffff", // Replace with your dark theme text color
      },
    },
  },
  plugins: [],
};
