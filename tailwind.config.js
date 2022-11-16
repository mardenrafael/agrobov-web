/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {
      colors: {
        primary: "#276852",
        secondary: "#000E23",
        tertiary: "#EFFFFF",
        yellow: "#EBDF00",
        "hover-primary": "#043726",
        "light-primary": "#27685292",
      },
      boxShadow: {
        '4xl': '0px 0px 20px #276852',
      }
    },
  },
  plugins: [],
};

