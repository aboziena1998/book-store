/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B3764",
        secondary: "#ffca42",
        neutral: "#F6F8FC",
      },
      fontFamily: {
        cardo: ["Cardo", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
