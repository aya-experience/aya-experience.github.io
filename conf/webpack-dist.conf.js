const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    // preLoaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}],
    loaders: [
      {test: /.json$/, loader: 'json-loader'},
      {test: /\.(css|scss)$/, loaders: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?minimize!sass-loader!postcss-loader'
      })},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {presets: ['es2015', 'react']}
        }]
      },
      {test: /.html$/, loader: 'html-loader'},
      {test: /\.(svg|png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html'),
      minify: require('./html-minifier.conf.json')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {unused: true, dead_code: true} // eslint-disable-line camelcase
    }),
    new ExtractTextPlugin('index-[contenthash].css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      },
      debug: true
    })
  ],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  entry: `./${conf.path.src('index.jsx')}`
};
