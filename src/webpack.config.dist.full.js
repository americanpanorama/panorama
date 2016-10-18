'use strict';

var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./webpack.config.js');

module.exports = merge(config, {
  externals: null,
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'components.full.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
        semicolons: true,
      },
    })
  ]
});
