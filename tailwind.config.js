/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 1px 1px 0px rgba(255, 255, 255, 0.15) inset",
        down: "0px -10px 5px -10px rgba(255, 255, 255, 0.25) inset",
      },
      screens: {
        mb: "1120px",
        sb: "850px",
        xs: "425px",
        s: "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
