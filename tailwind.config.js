/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         fontFamily:{
          "Handlee": ['Handlee','Roboto',"Reddit","Poppins"],
          "Poppins" :["Poppins"]

         },
    },
  },
  plugins: [],
}

