/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        Prompt: ["Prompt", "sans-serif"],
      },
      colors: {
        primary: "#01004C",
        secondary: "#022800",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      screens: {
        "md-lg": "950px",
        // => @media (min-width: 950px) { ... }
      },
    },
  },
  plugins: [],
};
