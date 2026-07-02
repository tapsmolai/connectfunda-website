/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cf: {
          navy: '#2D3645',
          navyDeep: '#222A36',
          navyInk: '#1B222C',
          orange: '#F2682A',
          orangeDk: '#D9531A',
          ink: '#37404F',
          muted: '#647084',
          line: '#E7EAF0',
          bgSoft: '#F6F8FB',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        cf: '0 18px 50px -20px rgba(45,54,69,.28)',
      },
    },
  },
  plugins: [],
};
