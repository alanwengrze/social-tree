/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage:{
        'bodyImage':"url('./src/assets/img-body.jpg')"
      }
    },
  },
  plugins: [],
}
