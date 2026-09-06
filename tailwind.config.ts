import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // <-- must be at the root level
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#6d28d9',      // Purple-600
        primaryDark: '#5b21b6',  // Purple-700
        accent: '#0d9488',       // Teal-600
        darkBg: '#0f172a',       // Slate-900 (use with dark:bg-darkBg)
        darkText: '#e2e8f0',     // Slate-200 (use with dark:text-darkText)
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
