/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "52px",
    },
    extend: {
      fontFamily: {
        oswald: ["Oswald"],
        bebasneue: ["Bebas Neue"],
        silkscreen: ["Silkscreen"],
      },
      colors: {
        primary: "#2f45b1",
        secondary: "#F0FBFB",
        third: "#5cf0eb",
        yellow: "#f8b13d",
        dark: "#0f172a",
      },
      screens: {
        'lg2': "1320px",
      },
    },
  },
  plugins: [],
};

