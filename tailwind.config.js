/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        canvas: {
          dark: '#0A0A0A',
          light: '#FAFAFA',
        },
        surface: {
          dark: '#111827',
          light: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          glow: 'rgba(59, 130, 246, 0.18)',
        },
      },
      backgroundImage: {
        'dot-pattern-dark':
          'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
        'dot-pattern-light':
          'radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '24px 24px',
      },
    },
  },
  plugins: [],
};
