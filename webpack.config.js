const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// https://github.com/webpack-contrib/mini-css-extract-plugin

module.exports = (env, argv) => {
    const isProd = argv.mode !== 'development';

    const extractSass = new ExtractTextPlugin({
        filename: 'style/[name].[contenthash].css',
        disable: !isProd,
    });

    return {
        entry: {
            main: [
                './src/script/index.js',
                './src/style/index.scss',
            ],
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: extractSass.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true,
                                    sourceMap: isProd,
                                },
                            },
                            {
                                loader: 'sass-loader',
                            }],
                        fallback: 'style-loader',
                    }),
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: 'images/[name].[ext]',
                                limit: 10000,
                            },
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['env', {
                                    targets: {
                                        browsers: ['> 5% in US'],
                                    },
                                    modules: false,
                                }],
                            ],
                            plugins: [
                                ['transform-react-jsx', { pragma: 'h' }],
                            ],
                        },
                    },
                },
                {
                    sideEffects: false,
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                inject: true,
                hash: true,
            }),
            extractSass,
            new ProgressBarPlugin({
                format: '\u001b[90m\u001b[44mBuild\u001b[49m\u001b[39m [:bar] \u001b[32m\u001b[1m:percent\u001b[22m\u001b[39m (:elapseds) \u001b[2m:msg\u001b[22m',
                renderThrottle: 100,
            }),
        ],
        devtool: isProd ? 'nosources-source-map' : 'eval-source-map',
        output: {
            filename: 'scripts/[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
    };
};
