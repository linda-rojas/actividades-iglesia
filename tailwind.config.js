/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "roboto", "sans-serif", "poppins"],
      },
      screens: {
        xs: "300px", //breakpoint para pantallas más pequeñas
        s: "374px",
      },
      colors: {
        "custom-yellow": "#D9923B",
      },
    },
  },
  plugins: [],
};
