/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      height: {
        "80vh": "80vh",
        "70vh": "70vh",
      },
    },
  },
  plugins: [],
};
