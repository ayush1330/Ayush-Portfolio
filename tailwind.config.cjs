/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF", 
        accent: "#666666",
        text: "#333333",
        background: "#FAFAFA",
        // New navbar and text colors
        navbarBg: "#4A4A4A",
        lightGrey: "#D3D3D3",
        paragraphLight: "#A9A9A9",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'helvetica': ['Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'system': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
};
