import Carousel from "./src/components/Carousel";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        lato: ["Lato"],
      },
      height: {
        546: "540px",
      },
      color: {
        customColorBackground: "rgb(249, 249, 251)",
      },
    },
  },
  plugins: [],
};
