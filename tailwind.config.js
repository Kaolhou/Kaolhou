/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      fontFamily:{
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      colors:{
        pallete:{
          1: '#168aad',
          2: '#dadada',
          3: '#333333',
          4: '#252525',
          5: '#141414'
        },
      }
    },
  },
  plugins: [],
}
