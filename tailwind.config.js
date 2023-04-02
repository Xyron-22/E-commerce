const { Roboto, Roboto_Mono } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      ws: "#dcdcdc",
      fc: "#324d67",
      red: "#f02d34",
      white: "white",
      gray: "gray",
      sc: "#eee",
      sbg: "#f02d34",
      green: "#31A831",
      cartBg: "rgba(0, 0, 0)",
      green: "#00FF00",
    },
    extend: {
      boxShadow: {
        "3xl": "0 3px 10px gray"
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"]
      },
    },
  },
  plugins: [],
}