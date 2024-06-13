/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "primary": "#ffa4a4",
        "secondary": "#c52aa5",
        "brown": "#876363",
        "text": "#000000",
        "background": "#ffffff",
        "background2": "#f5f0f0",
        "danger": "#e51919",
      },
    },
  },
  plugins: [],
}

