'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './main.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'panorama.js',
    library: 'Panorama',
    libraryTarget: 'umd'
  },
  resolve: {
    modulesDirectories: ['node_modules', './src']
  },
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      { test: /\.png$/, loader: "url-loader?limit=10000" },
      {
        test: /\.(jpg|jpeg|svg)$/,
        loader: 'file?name=assets/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new Clean(['dist'])
    /*
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
*/
  ]
};