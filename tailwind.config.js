/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideIn: 'slideIn 0.5s ease-out forwards'
      },
      backgroundImage: {
        'content-bg-1': "url(./assets/lablens/content-bg-1.png')",
      },
    },
  },
  plugins: [],
}

