const { tailwindTheme } = require(`./out/index`);

/** @type {import('tailwindcss').Config} */
export default {
  content: [`./App.{js,jsx,ts,tsx}`, `../../packages/**/*.{js,jsx,ts,tsx}`],
  theme: {
    ...tailwindTheme,
  },
  plugins: [],
};
