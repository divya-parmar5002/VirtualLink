import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
<<<<<<< HEAD
          1: '#fffffff',
          2: '#617eb0',
=======
          1: '#1C1F2E',
          2: '#161925',
>>>>>>> 6d248d96 (first commit)
          3: '#252A41',
          4: '#1E2757',
        },
        blue: {
<<<<<<< HEAD
          1: '#000080',
=======
          1: '#0E78F9',
>>>>>>> 6d248d96 (first commit)
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
<<<<<<< HEAD
          1: '#FF1493',
        },
        purple: {
          1: '#FF7F50',
        },
        yellow: {
          1: '#32CD32',
=======
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#F9A90E',
>>>>>>> 6d248d96 (first commit)
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
<<<<<<< HEAD
       backgroundImage: {
         hero: "url('/images/hero-background.png')",
           
       },
=======
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
>>>>>>> 6d248d96 (first commit)
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
