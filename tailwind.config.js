/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      font: {
        proxima: "normal normal Proxima Nova",
        roboto: "normal normal Roboto",
      },
      colors: {
        danger: { 100: "#F56A6A", 200: "#E00046" },
      },
    },
  },
  plugins: [],
};
