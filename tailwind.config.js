/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light" : "#F3F3F3",
        "dark" : "#191A23",
        "lime" : "#B9FF66"
      },
      fontSize: {
        "h1" : "3.75rem", /* 60px */
        "h2" : "2.5rem", /* 40px */
        "h3" : "1.875rem", /* 30px */
        "h4" : "1.25rem", /* 20px */
        "p" : "1.125rem", /* 18px */
      },
      spacing: {
        '7': '0.438rem', /* 7px */
        '22': '1.375rem', /* 22px */
        '35': '2.188rem', /* 35px */
        '50': '3.125rem', /* 50px */
        '55': '3.438rem', /* 55px */
        '60': '3.75rem', /* 60px */
      },
      borderRadius: {
        '7': '0.438rem', /* 7px */
        '14': '0.875rem', /* 14px */
        '45': '2.813rem', /* 45px */
      }, 
    },
  },
  plugins: [],
}