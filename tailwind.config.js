module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {},
    },
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  };
  