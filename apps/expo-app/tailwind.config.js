const { tailwindTheme } = require(`./out/index`);

/** @type {import('tailwindcss').Config} */
export default {
  content: [`./out/index.js`],
  theme: {
    ...tailwindTheme,
  },
  plugins: [],
};
