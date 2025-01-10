/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        shantell: ['"Shantell Sans"', "cursive"],
        sacramento: ['"Sacramento"', "cursive"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateX(10px)" },
          "50%": { transform: "translateX(200px)" },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
        reverseMove: {
          "0%, 100%": { transform: "translateX(10px)" },
          "50%": { transform: "translateX(-100px)" },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        move: "move 25s ease-in-out infinite",
        reverseMove: "reverseMove 25s ease-in-out infinite",
        zoom: "zoom 25s ease-in-out infinite",
        spin: "spin 1s linear infinite", // Define spin animation here
      },
    },
  },
  plugins: [],
};
