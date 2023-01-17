/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "768px" },
      md: { max: "1024px" },
      lg: { max: "1280px" },
      xl: { max: "1536px" },
    },
    extend: {
      fontFamily: {
        lexend: ["Lexend"],
      },
    },
  },
  plugins: [],
};
