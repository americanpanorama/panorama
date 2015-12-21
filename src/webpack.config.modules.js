/**
 * This is a test for packaging the components as separate modules
 */

'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  debug: true,
  devtool: '#source-map',

  // NOTE: when running this via `npm run build:dist-modules`
  // you will need to edit the resulting index.js file
  // to only include these two files
  entry: {
    Legend: './Legend/Legend',
    DiscreteBarChart: './DiscreteBarChart/DiscreteBarChart'
  },

  eslint: {
    failOnError: true
  },

  externals: [
    {
      'cartodb-client': 'cartodb-client',
      'd3': 'd3',
      'intro.js': 'intro.js',
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
      { test: /\.json$/, loader: 'json-loader' }
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
    path: path.join(__dirname, '..', 'dist-modules'),
    filename: '[name]/[name].js',
    library: ['@panorama/toolkit', '[name]'],
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('components.css', { allChunks: true })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['components', 'node_modules']
  },

  resolveLoader: {
    root: path.join(__dirname, '..', 'node_modules')
  }
};
