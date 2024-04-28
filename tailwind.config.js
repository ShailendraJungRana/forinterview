/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        button:'#2dc8b4',
        backgroundService:'#eaf8f8 ',
        iconBg:'#f4e5d2',
        iconBg2: '#d3f3dc',
      }

    },

  },
  plugins: [],
}

