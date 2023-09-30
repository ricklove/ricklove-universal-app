module.exports = function (api) {
    api.cache(true);
    return {
        presets: [`babel-preset-expo`],
        plugins: [
            [
                `nativewind/babel`,
                {
                    // this must be used for expo web so the className passes through
                    mode: `transformOnly`,
                },
            ],
        ],
    };
};
