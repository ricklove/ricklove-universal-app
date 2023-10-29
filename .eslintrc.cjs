module.exports = {
    root: true,
    extends: [`universe/native`],
    rules: {
        'multiline-ternary': [`error`, `always-multiline`],
        // Normal Backticks Everywhere (except jsx and imports)
        // quotes: `off`,
        '@typescript-eslint/quotes': [`error`, `backtick`],
        // 'jsx-quotes': [`error`, `prefer-single`],
        // 'import-quotes/import-quotes': [`error`, `single`],
        'no-useless-return': `off`,
    },
};
