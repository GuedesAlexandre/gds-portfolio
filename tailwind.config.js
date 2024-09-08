/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors : {
      Text: "#FFFFFF",
      Background: "#0000000",
      Primary: "#98A4D2",
      Secondary: "#29397B",
      Accent : "#3F5CD1",
    },
    extend: {
      fontFamily: {
        aerial: ["Aerial", "sans-serif"],
        satochi: ["Satoshi", "sans-serif"],
        gilroy_regular: ["GilroyRegular", "sans-serif"],
        gilroy_bold: ["GilroyBold", "sans-serif"],
      },

    },
  },
  plugins: [],
};
