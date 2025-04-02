/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
      backgroundImage: {
        'content-bg-1': "url(./assets/lablens/content-bg-1.png')",
      },
    },
  },
  plugins: [],
}

