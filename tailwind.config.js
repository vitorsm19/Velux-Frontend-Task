/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Velux: ["VeluxGothic"],
      VeluxLight: ["VeluxGothic-Light"],
    },
    screens: {
      "mobile": {
        max: "767px",
      },
      'sm': {
        min: "768px",
      },
      'tablet': {
        max: "1023px",
      },
      'md': {
        min: "1024px",
      },
      'desktop': {
        max: "1440px",
      },
      'xl': {
        min: "1441px",
      },
    },
  },
  plugins: [],
};