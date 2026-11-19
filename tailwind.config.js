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
          ink: '#028538',
          soft: '#E7FCEE',
          on: '#061A0E',
        },
        secondary: {
          DEFAULT: '#454955',
          light: '#5A5F6E',
          dark: '#2B2E37',
        },
        ink: {
          DEFAULT: '#14171F',
          muted: '#454955',
        },
        canvas: {
          light: '#F9FAFB',
          dark: '#0B0D11',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#14171F',
        },
      },
      boxShadow: {
        soft: '0 2px 12px rgba(20, 23, 31, 0.05)',
        card: '0 8px 28px rgba(20, 23, 31, 0.06)',
      },
    },
  },
  plugins: [],
};
