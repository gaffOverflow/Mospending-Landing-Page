/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Manrope" : "Manrope",
        "Poppins" : "Poppins",
      },
      colors: {
        "Primary-Background" : "#3734A9",
        "Secondary-Background" : "#FAFBFF",
        "Orange-Accent" : "#FFA051"
      }
    },
  },
  plugins: [],
};

