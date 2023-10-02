module.exports = function (api) {
    api.cache(true);
    return {
        presets: [`babel-preset-expo`],
        plugins: [
            `expo-router/babel`,
            [
                `nativewind/babel`,
                {
                    // this must be used for expo web so the className passes through
                    // mode: `transformOnly`,
                    // mode: `compileOnly`,
                },
            ],
        ],
    };
};
