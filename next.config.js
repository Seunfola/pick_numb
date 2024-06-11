module.exports = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.font\.js/,
            use: [
                {
                    loader: 'next-font-loader',
                    options: { /* options here */ }
                }
            ]
        });
        return config;
    },
};
