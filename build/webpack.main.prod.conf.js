'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

const mainBaseWebpackConfig = require('./webpack.main.base.conf');

const mainProdConfig = merge(mainBaseWebpackConfig, {
  mode: 'production',

  entry: {
    main: path.join(__dirname, '../src/main/index.js')
  },

  node: {
    __dirname: false,
    __filename: false
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
          },
        },
        sourceMap: false,
        parallel: true,
      })
    ]
  }
})

module.exports = mainProdConfig
