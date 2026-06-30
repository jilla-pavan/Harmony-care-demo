/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B5ED7',
        teal: '#14B8A6',
        accent: '#22C55E',
        background: '#F8FBFF',
        surface: '#FFFFFF',
        textMain: '#1F2937',
        muted: '#6B7280',
        emergency: '#DC2626',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
