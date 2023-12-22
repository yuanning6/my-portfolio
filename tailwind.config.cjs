/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        green: "#669944",
        pink: "#F4AFA0",
        "gray": "#A8A8A8",
        "mid-gray": "#F5F5F5",
        "light-gray": "#F8F8F8",
        "lightlight-green": "#9CBD86",
        "light-green": "#9CBD86",
        "dark-green": "#538532",
        "light-black": "#393939",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.svg')",
        "about-card": "url('/src/assets/aboutcard.svg')",
        constructing: "url('/src/assets/constructing.svg')",
      },
    },
  },
  plugins: [],
};
