/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./shared/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pry-color": "#246BFD",
        "error-color": "#e30000",
        "dark-color": "#111",
        "light-color": "#eee",
      },
    },
  },
  plugins: [],
};
