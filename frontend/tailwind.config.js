/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'hero': "url('https://wallpapercave.com/wp/wp5000544.jpg')",
    },
    fontFamily:{
      'Playwrite': "Playwrite GB S",
      'absans':"absans",
      'src': "url('../assets/Absans-Regular.ttf')",
    }
  },
  plugins: [],
}

