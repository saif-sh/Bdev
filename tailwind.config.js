/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        MonotypeCorsiva: ["Monotype Corsiva", "cursive"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        MongolianBaiti: ["Mongolian Baiti","serif"], // Add the Nunito font
        serif: ['Playfair Display', 'serif'], // or any other elegant serif font
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards'
      }
    },
  },
  plugins: [],
}
