/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "BLUE-1": "#14435E",
        "BLUE-2": "#3DA0DA",
        GRAY: "#B4B4B5",
        YELLOW: "#FBAC18",
      },
    },
  },
  plugins: [],
};
