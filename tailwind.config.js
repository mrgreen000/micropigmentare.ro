/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Disable automatic dark mode
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      minHeight: {
        '24': '6rem',
        '96px': '96px'
      },
      colors: {
        primary: '#B29D8B',
        'primary-hover': '#A29282',
        secondary: '#D8C8B8',
        'text-dark': '#4B4B4A',
        'text-light': '#A29282',
        'bg-light': '#F9F7F5'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}