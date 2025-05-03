/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1f4653',
          50: '#f7f9fa',
          100: '#e1e9ec',
          200: '#c3d3d9',
          300: '#a5bdc6',
          400: '#87a7b3',
          500: '#1f4653',
          600: '#1c3f4b',
          700: '#193943',
          800: '#16323b',
          900: '#132b33',
        },
        secondary: {
          DEFAULT: '#F1BDA3',
          50: '#fef8f6',
          100: '#fdf1ec',
          200: '#fbe3d9',
          300: '#f9d5c6',
          400: '#f7c7b3',
          500: '#F1BDA3',
          600: '#d9aa93',
          700: '#c19783',
          800: '#a98473',
          900: '#917163',
        },
        accent: {
          DEFAULT: '#87B6A4',
          50: '#f4f8f7',
          100: '#e9f1ef',
          200: '#d3e3df',
          300: '#bdd5cf',
          400: '#a7c7bf',
          500: '#87B6A4',
          600: '#7aa494',
          700: '#6c9284',
          800: '#5e8074',
          900: '#506e64',
        },
        background: '#ffffff',
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      boxShadow: {
        'section': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};