'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');

const mainBaseWebpackConfig = require('./webpack.main.base.conf');

const mainDevConfig = merge(mainBaseWebpackConfig, {
  mode: 'development',

  entry: {
    main: path.join(__dirname, '../src/main/index.dev.js')
  },

  externals: [
    {'electron-debug': 'electron-debug'}
  ],

  node: {
    __dirname: true,
    __filename: true
  },

  plugins: [
    new webpack.DefinePlugin({
      '__static': `"${path.join(__dirname, '../static').replace(/\\/g, '\\\\')}"`
    })
  ]
})

module.exports = mainDevConfig
