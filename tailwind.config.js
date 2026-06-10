/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Breakpoints: Desktop >=1024 (covers all iPad landscape 1080–1366),
      // Tablet 810–1023 (iPad portrait), Phone <810.
      screens: {
        tablet: '810px',
        desktop: '1024px',
      },
      colors: {
        // Inverted palette: black background, white foreground
        ink: '#000000',
        paper: '#ffffff',
        muted: '#8a8a8a',
      },
      fontFamily: {
        // Latin uses JetBrains Mono; Korean glyphs fall back to Pretendard.
        sans: ['JetBrains Mono', 'Pretendard', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        mono: ['JetBrains Mono', 'Pretendard', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
