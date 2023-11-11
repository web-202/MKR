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
            rules: [
                // TypeScript
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                // JavaScript/ES6+ through Babel
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
                // HTML
                {
                    test: /\.html$/,
                    use: 'html-loader',
                },
                // Images
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: '[name].[ext]',
                                outputPath: 'images',
                            },
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65,
                                },
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.90],
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                            },
                        },
                    ],
                },
                // SASS/SCSS
                {
                    test: /\.(scss|sass)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
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
