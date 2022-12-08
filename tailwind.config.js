/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#08408D",
          blue: "#08408D",
          turquoise: "#46c2ca",
          red: "#990708",
        },
        paragraph: "#0f172abf",
      },
      backgroundColor: {
        primary: {
          DEFAULT: "#08408D",
          blue: "#08408D",
          turquoise: "#46c2ca",
          red: "#990708",
        },
      },
      fontFamily: {
        poppins: ["'HK Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
  // darkMode: "class",
};
