/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        lg: "-15px 15px 0px rgba(0, 0, 0, 1)",
        md: "-7px 7px 0px rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [],
};
