/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#00d4ff",
        tertiary: "#1a1a2e",
        accent: "#ff6b35",
        "ai-gradient": "#667eea",
        "ai-gradient-end": "#764ba2",
        "black-100": "#0f0f23",
        "black-200": "#050510",
        "white-100": "#f8f9fa",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
