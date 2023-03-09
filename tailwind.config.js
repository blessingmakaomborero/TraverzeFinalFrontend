
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{react,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '425px'},
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}