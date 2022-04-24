module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        hayli: {
          primary: '#785de8',
          secondary: '#4024ad',
          accent: '#ffa700',
          neutral: '#377dff',
          'base-100': '#f2f2f2',
          info: '#fde68a',
          success: '#a3e635',
          warning: '#fca5a5',
          error: '#ef4444',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
