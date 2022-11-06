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
        secundaria: "#000E23",
        tercearia: "#EFFFFF",
        yellou: "#EBDF00",
        "hover-primary": "#043726",
        "light-primary": "#27685292",
      },
    },
  },
  plugins: [],
};
