const path = require('path');
const srcPath = path.join(__dirname, 'src');
const publicPath = path.join(__dirname, 'public');
const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

module.exports = {
  context: srcPath,
  entry: './index.js',
  output: {
    path: publicPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
