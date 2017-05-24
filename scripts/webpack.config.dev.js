'use strict'

var webpack = require('webpack')
var path = require('path')

var webpackConfig = {
  entry: {
    'index': ['./frontend/index.tsx']
  },
  output: {
    path: path.resolve('./app/public/dist/'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [],
  devtool: 'source-map'
}

module.exports = webpackConfig
