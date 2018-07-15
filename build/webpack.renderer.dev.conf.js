const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const DotEnvWebpackPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseWebpackConfig = require('./webpack.renderer.base.conf');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const rendererDevConfig = merge(baseWebpackConfig, {
  mode: 'development',

  entry: {
    renderer: [path.join(__dirname, 'dev-client'), '@babel/polyfill', './src/renderer/index.tsx'],
  },

  // Enable source maps for development environment
  devtool: config.dev.devtool,

  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true }),
  },

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
  },

  node: {
    __dirname: true,
    __filename: true
  },

  plugins: [
    // Apply the .env file
    // new DotEnvWebpackPlugin({
    //   path: './.env',
    // }),

    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env'),
      'process.env.NODE_ENV': '"production"',
      '__assets': `"${path.join(__dirname, '../app/assets').replace(/\\/g, '\\\\')}"`
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../app/pages/index.ejs'),
      inject: true
    }),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../app/assets'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*'],
      },
    ]),
  ],
});

module.exports = rendererDevConfig
