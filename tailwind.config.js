// packages/cl/src/design/tailwind/theme.ts
var tailwindTheme = {};

// packages/cl/src/design/tailwind/config.ts
var config = {
  content: [`./packages/**/*.{js,jsx,ts,tsx}`],
  theme: {
    ...tailwindTheme
  },
  plugins: []
};
var config_default = config;
export {
  config_default as default
};
