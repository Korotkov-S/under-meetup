/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './inertia/**/*.{edge,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        70: '70px',
      },
      colors: {
        'background': '#fbf8ee',
        'text-h1': '#131c20',
        'text-primary': '#232f37',
        'text-link': '#2563eb',
        'text-subtitle': 'rgba(0, 0, 0, 0.6)',
        'text-title': '#000',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
      },
      fontSize: {
        h1: '2.5rem',
        sub: '1.3125rem',
      },
      fontWeight: {
        'extra-black': '1000',
      },
      boxShadow: {
        block: '0 0 24px 0 rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        38: '38px',
      },
    },
  },
  plugins: [],
}
