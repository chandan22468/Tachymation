/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#000000',      // Pure Black Canvas
        'bg-secondary': '#121212',    // Dark Grey Card
        'text-primary': '#FFFFFF',    // White text
        'text-secondary': '#a1a1aa',  // Off-white / light-grey body
        'accent': '#FFFFFF',          // Accent color
        'accent-soft': '#1c1c1c',     // Dark accent soft
        'dark-panel': '#000000',
        'gold': '#0070F3',            // Blue link accent
        'tint': '#121212',
        'border': '#222222',          // Subtle border (border-white/10 equivalent)
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
