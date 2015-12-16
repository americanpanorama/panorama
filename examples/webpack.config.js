'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WEBSERVER_PORT = 8888;

module.exports = {
  context: __dirname,

  debug: true,

  devtool: 'source-map',

  devServer: {
    port: WEBSERVER_PORT
  },

  entry: [
    './index.jsx'
  ],

  eslint: {
    failOnError: true
  },

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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-advanced!sass-loader?sourceMap'),
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: "json-loader" }
    ],
    preLoaders: [
      {
        test: /\.js[x]$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'examples.js',
    libraryTarget: 'var'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('examples.css', { allChunks: true })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules']
  },

  resolveLoader: {
    root: path.join(__dirname, '..', 'node_modules')
  }
};
