/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-grey": {
          900: "#0F172A",
          700: "#334155",
          600: "#475569",
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
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
