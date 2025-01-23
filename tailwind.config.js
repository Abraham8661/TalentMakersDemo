/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        priColor: '#6a0dad',
        greyColor: '#7f7f7f',
        yellColor: '#ffd700',
        textColor: '#111827',
        lightBg: '#f2edf5',
      },
      backgroundImage: {
        getInvolvedImageDesktop: "url('images/getInvolved_Desktop.png')",
        getInvolvedImageMob: "url('images/getInvolved_mobile.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
}

//colors:{
//  priColor: '#6a0dad',
//  greyColor: '#7f7f7f',
//  yellColor: '#ffd700',
//  textColor: '#111827',
//},

