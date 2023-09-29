import { Config } from 'tailwindcss';

import { tailwindTheme } from './theme';

// Note: paths resolved from root
const config: Config = {
    content: [`./packages/**/*.{js,jsx,ts,tsx}`],
    theme: {
        ...tailwindTheme,
    },
    plugins: [],
};

export default config;
