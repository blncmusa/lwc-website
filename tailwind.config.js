/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D1B2A',
        lessDark: '#1B263B',
        neutral: '#415A77',
        light: '#778DA9',
        theme: '#edf6f9',
        site: "#3cbdec"
      },
    },
  },
  plugins: [],
}

// Colors have been added to the theme configuration
