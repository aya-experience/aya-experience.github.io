const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [
      {test: /.json$/, loaders: ['json']},
      {test: /\.(css|scss)$/, loaders: ['style', 'css', 'sass', 'postcss']},
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /.html$/, loader: 'html'},
      {test: /\.(svg|png|jpg)$/, loader: 'url?limit=8192'}
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html'),
      inject: true
    })
  ],
  postcss: () => [autoprefixer],
  debug: true,
  devtool: 'eval-source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  entry: `./${conf.path.src('index')}`
};
