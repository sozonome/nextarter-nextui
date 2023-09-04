const { fontFamily } = require('tailwindcss/defaultTheme');
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};
