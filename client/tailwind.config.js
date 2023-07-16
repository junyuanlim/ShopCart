/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'md': '880px'
    }
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
  ],
}

