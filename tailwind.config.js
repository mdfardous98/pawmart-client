/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef3e2",
          100: "#fde8c7",
          200: "#fad18f",
          300: "#f7b957",
          400: "#f4a21f",
          500: "#e6941a",
          600: "#b87614",
          700: "#8a580f",
          800: "#5c3a0a",
          900: "#2e1d05",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
