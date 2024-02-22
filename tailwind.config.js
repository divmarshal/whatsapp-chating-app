/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["roboto", "sans-serif", defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        background: "#FCF5EB",
        primary: "#008069",
        secondary: "#E1FFD8",
        textGray: "#757575",
      },
    },
  },
  plugins: [],
};
