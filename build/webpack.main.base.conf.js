'use strict'

process.env.BABEL_ENV = 'main'

const path = require('path')
const webpack = require('webpack')
const { dependencies } = require('../package.json')

const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

let mainConfig = {
  target: 'electron-main',

  mode: 'development',

  entry: {
    main: path.join(__dirname, '../src/main/index.js')
  },

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
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.node']
  }
}

/**
 * Adjust mainConfig for development settings
 */
if (process.env.NODE_ENV !== 'production') {
  mainConfig.plugins.push(
    new webpack.DefinePlugin({
      '__static': `"${path.join(__dirname, '../static').replace(/\\/g, '\\\\')}"`
    })
  )
}

/**
 * Adjust mainConfig for production settings
 */
if (process.env.NODE_ENV === 'production') {
  mainConfig.optimization = {
    minimizer: [
      new UglifyJsWebpackPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
    ]
  }

  mainConfig.plugins.push(
    new BabiliWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  )
}

module.exports = mainConfig
