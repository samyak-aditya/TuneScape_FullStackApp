// webpack.config.js
export const module = {
    rules: [
        // ...
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
    ],
};
  