// webpack.config.js
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './app/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        module: {
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './app/index.html',
            }),
        ],
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        ecma: 6,
                    },
                }),
            ],
        },
        devServer: {
            static: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
        },
    };
};
