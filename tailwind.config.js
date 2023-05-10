/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: 'var(--color-primary)',
        "text-default": 'rgb(51,51,51)',
        "search": '#CBCCCC',

      },
      boxShadow: {
        '3xl': '0px 5px 5px -5px rgba(0, 0, 0, 0.25)',
      },
      borderRadius:{
        '4xl':'30px',
      },

    },
  },
  plugins: [],
}

