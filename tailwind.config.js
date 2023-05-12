/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: 'var(--color-primary)',
        "text-default": '#666666',
        "search": '#CBCCCC',
        "text-default-darker":"#333333",


      },
      border:{
        '1.5':'1.5px',
      },
      boxShadow: {
        '3xl': '0px 5px 5px -5px rgba(0, 0, 0, 0.25)',
      },
      borderRadius:{
        '4xl':'30px',
      },
      fontSize:{
        '3.25xl': ['32px', {
          lineHeight: '48px',
        }],
      },
      fontFamily: {
        libre: ['"Be Vietnam Pro"', ...defaultTheme.fontFamily.sans]
      },
      margin:{
        '5.5':'22px',
      }

    },
  },
  plugins: [],
}

