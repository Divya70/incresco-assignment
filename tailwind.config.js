/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#5CA4A9",
        customDarkBlue: '#1D2331',
        customBlueGray: '#323C52',
        customGray: '#EDEDED',

      },
    },
  },
  plugins: [],
}

