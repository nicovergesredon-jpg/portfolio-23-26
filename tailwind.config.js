/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night': '#071827',
        'deep': '#0B2545',
        'teal': '#00D1C1',
        'teal-soft': '#7FF7EC',
        'gray-text': '#A7B0BA',
        'off-white': '#F6F8FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
