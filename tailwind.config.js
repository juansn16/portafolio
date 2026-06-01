/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0f1117',
          card: '#1a1d29',
        },
      },
      boxShadow: {
        'neon': '0 0 15px rgba(34, 211, 238, 0.4)',
        'neon-lg': '0 0 30px rgba(34, 211, 238, 0.5)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
