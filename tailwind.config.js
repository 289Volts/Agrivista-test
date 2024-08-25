/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1440px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        bgColor: "#F0F0F0",
        primary: "#204E51",
        textColor: "#1E1E1E",
      },
      width: {
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
      },
    },
  },
  plugins: [],
};
