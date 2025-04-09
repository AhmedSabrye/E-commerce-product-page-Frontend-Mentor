/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          DEFAULT: '#FF7E1B',
          'pale': '#FFEDE0'
        },
        'very-dark-blue': '#1D2026',
        'dark-grayish-blue': '#68707D',
        'grayish-blue': '#B6BCC8',
        'light-grayish-blue': '#F7F8FD',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

