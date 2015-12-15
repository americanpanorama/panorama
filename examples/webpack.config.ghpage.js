'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.js');
config.entry = ['./index.jsx'];
config.debug = false;

module.exports = config;