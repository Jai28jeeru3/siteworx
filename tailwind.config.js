/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img":"url(/src/imge/img3.jpg)",
        "img1":"url(/src/imge/img4.jpg)"
      }
    },
  },
  plugins: [],
}

