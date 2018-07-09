'use strict'

process.env.BABEL_ENV = 'main'

const path = require('path')
const webpack = require('webpack')
const { dependencies } = require('../package.json')

module.exports = {
  target: 'electron-main',

  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../app/dist')
  },

  externals: [
    ...Object.keys(dependencies || {})
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.node']
  }
}
