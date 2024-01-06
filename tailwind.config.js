/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2a5da6",
        onPrimary: "#FFFFFF",
        secondary: "#B3261E",
        onSecondary: "#FFFFFF",
        surface: "#FFFBFE",
      },
    },
  },
  plugins: [],
};
