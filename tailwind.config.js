/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Framer breakpoints: Desktop >=1200, Tablet 810-1199, Phone <810
      screens: {
        tablet: '810px',
        desktop: '1200px',
      },
      colors: {
        // Inverted palette: black background, white foreground
        ink: '#000000',
        paper: '#ffffff',
        muted: '#8a8a8a',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
