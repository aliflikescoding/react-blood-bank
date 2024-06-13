/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "primary": "#ffa4a4",
        "secondary": "#c52aa5",
        "text": "#000000",
        "background": "#ffffff",
        "error": "#e51919",
      },
    },
  },
  plugins: [],
}

