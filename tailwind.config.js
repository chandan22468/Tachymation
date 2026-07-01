/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAFAFA',      // Canvas Soft
        'bg-secondary': '#FFFFFF',    // Canvas
        'text-primary': '#171717',    // Ink
        'text-secondary': '#4D4D4D',  // Body
        'accent': '#171717',          // Ink
        'accent-soft': '#F5F5F5',     // Canvas Soft 2
        'dark-panel': '#000000',
        'gold': '#0070F3',            // Blue accent link
        'tint': '#FAFAFA',
        'border': '#EBEBEB',          // Hairline
        'vercel-cyan': '#50E3C2',
        'vercel-pink': '#FF0080',
        'vercel-violet': '#7928CA',
        'vercel-link': '#0070F3',
      },
      fontFamily: {
        'display': ['Cabinet Grotesk', 'sans-serif'],
        'drama': ['Instrument Serif', 'serif'],
        'body': ['General Sans', 'sans-serif'],
        'mono': ['Geist Mono', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
