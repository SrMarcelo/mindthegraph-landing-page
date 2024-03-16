/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orangish: "#FF9226",
        pinkish: "#DC1866",
        gray: "#EEEEEE",
        purplish: "#7833FF",
        blackish: "#212121",
        blueish: "#5F29CC",
      },
    },
  },
  plugins: [],
};
