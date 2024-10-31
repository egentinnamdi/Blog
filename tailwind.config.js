/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#090D1F",
        secondary: "#6941C6",
        white: "#fff",
        skeleton: "#363636",
      },
    },
  },
  plugins: [],
};
