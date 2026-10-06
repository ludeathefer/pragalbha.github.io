/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#17221f",
        moss: "#1e4d3b",
        lime: "#d8f36a",
        cream: "#f6f7ef",
      },
      boxShadow: {
        card: "0 20px 60px rgba(23, 34, 31, 0.08)",
      },
    },
  },
  plugins: [],
};
