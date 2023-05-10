/** @type {import('tailwindcss').Config} */
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

