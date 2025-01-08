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
        shantell: ['"Shantell Sans"', 'cursive'],
        sacramento: ['"Sacramento"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(200px)' },
        },
        reverseMove: {
          '0%, 100%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(-100px)' },
        },
      },
      animation: {
        move: 'move 25s ease-in-out infinite',
        reverseMove: 'reverseMove 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
