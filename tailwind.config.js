/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#111111',
        'text-primary': '#FFFFFF',
        'text-secondary': '#888888',
        'accent': '#FFFFFF',
        'accent-soft': '#1A1A1A',
        'dark-panel': '#000000',
        'gold': '#FFFFFF',
        'tint': '#111111',
        'border': '#333333',
      },
      fontFamily: {
        'display': ['Cabinet Grotesk', 'sans-serif'],
        'drama': ['Instrument Serif', 'serif'],
        'body': ['General Sans', 'sans-serif'],
        'mono': ['Geist Mono', 'monospace'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
