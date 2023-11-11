const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    const plugins = [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html',
        }),
    ];

    if (isProduction) {
        plugins.push(
          new HtmlWebpackPlugin({
              template: './app/index.html',
              filename: 'index.html',
              minify: {
                  collapseWhitespace: true,
                  removeComments: true,
                  removeRedundantAttributes: true,
                  removeScriptTypeAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  useShortDoctype: true,
              },
          }),
          new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify('production'),
          })
        );
    }

    return {
        entry: './app/index.ts',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        plugins: plugins,
        optimization: {
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
        devServer: {
            port: 8080,
        },
    };
};
