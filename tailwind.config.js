/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-grey": {
          100: "#F1F5F9",
          300: "#CBD5E1",
          600: "#475569",
          700: "#334155",
          900: "#0F172A",
        },

        orange: {
          600: "#EA580C",
        },

        blue: {
          600: "#2563EB",
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      content: {
        "tools-grey-blob": 'url("../src/assets/images/tools-blob-grey.svg")',
        "tools-blob-left": 'url("../src/assets/images/tools-blob-left.svg")',
        "tools-blob-right": 'url("../src/assets/images/tools-blob-right.svg")',
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
