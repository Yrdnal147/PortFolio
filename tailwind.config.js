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
        primary: {
          DEFAULT: '#04E762',
          hover: '#03CC56',
          ink: '#028A3A',
          on: '#06140B',
        },
        secondary: {
          DEFAULT: '#454955',
          light: '#5B6070',
          dark: '#2A2D36',
        },
        canvas: {
          dark: '#0A0B0E',
          light: '#F8F9FA',
        },
        surface: {
          dark: '#14161C',
          light: '#FFFFFF',
        },
      },
      backgroundImage: {
        'dot-pattern-dark':
          'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
        'dot-pattern-light':
          'radial-gradient(rgba(69, 73, 85, 0.12) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '24px 24px',
      },
    },
  },
  plugins: [],
};
