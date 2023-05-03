/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      display: ['var(--font-header)'],
      body: ['var(--font-body)'],
    },
    extend: {
      colors: {
        italiaYellow: '#fed304',
        italiaBlack: '#231f20',
        italiaWhite: '#fff',
        italiaGray: '#231f20',
      },
    },
  },
  plugins: [],
};
