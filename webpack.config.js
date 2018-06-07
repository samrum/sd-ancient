const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProd = argv.mode !== 'development';

    const moduleIdentifer = isProd ?
        new webpack.HashedModuleIdsPlugin() :
        new webpack.NamedModulesPlugin();

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
                    use: [
                        {
                            loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                sourceMap: isProd,
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
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
                    test: /\.svg$/,
                    loader: 'svg-url-loader',
                    options: {
                        name: 'images/[hash].[ext]',
                        limit: 1024 * 1,
                    },
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    loader: 'url-loader',
                    options: {
                        name: 'images/[hash].[ext]',
                        limit: 1024 * 1,
                    },
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                    },
                    enforce: 'pre',
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
                favicon: 'src/favicon.ico',
                inlineSource: 'runtime~.+\\.js',
            }),
            new InlineSourcePlugin(),
            new ProgressBarPlugin({
                format: '\u001b[90m\u001b[44mBuild\u001b[49m\u001b[39m [:bar] \u001b[32m\u001b[1m:percent\u001b[22m\u001b[39m (:elapseds) \u001b[2m:msg\u001b[22m',
                renderThrottle: 100,
            }),
            moduleIdentifer,
            new ManifestPlugin(),
            new MiniCssExtractPlugin({
                filename: isProd ? 'style/[name].[hash].css' : 'style/[name].css',
                chunkFilename: isProd ? 'style/[id].[hash].css' : 'style/[id].css',
            }),
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
            runtimeChunk: true,
        },
        devtool: isProd ? 'nosources-source-map' : 'eval-source-map',
        output: {
            filename: `scripts/[name].${isProd ? '[chunkhash].js' : 'js'}`,
            path: path.resolve(__dirname, 'dist'),
        },
    };
};
