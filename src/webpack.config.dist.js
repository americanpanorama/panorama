'use strict';

var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./webpack.config.js');

module.exports = merge(config, {
  output: {
    path: path.join(__dirname, '..', 'dist')
  },
  plugins: []
});
