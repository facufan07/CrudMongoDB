/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oscuro: "#1a1b1d",
        oscuroClaro: "#282B30",
        oscuroLetra: "#5E6570",
        blancoLetra: "#D1D4D9",
        redButton:"#8B0000",
        greenButton:"#50C878",
        blueButton:"#191970"
      }
    },
  },
  plugins: [],
}

