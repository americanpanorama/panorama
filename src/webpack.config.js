'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  debug: process.env.NODE_ENV !== 'production',

  devtool: 'source-map',

  entry: './main.js',

  eslint: {
    failOnError: true
  },

  externals: [
    {
      'd3': 'd3',
      'koto': 'koto',
      'leaflet': 'leaflet',
      'lodash': 'lodash',
      'react': {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react'
      },
      'react-dom': 'react-dom',
      'react-leaflet': 'react-leaflet',
      'topojson': 'topojson',
    }
  ],

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          optional: ['runtime'],
          stage: 0
        },
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-advanced!sass-loader?sourceMap'),
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: "json-loader" }
    ],
    preLoaders: [
      {
        test: /\.js[x]?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'components.js',
    library: '@panorama/toolkit',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('components.css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['components', 'node_modules']
  },

  resolveLoader: {
    root: path.join(__dirname, '..', 'node_modules')
  }
};
