const path = require('path');
const publicPath = path.resolve(__dirname, 'public');
const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

module.exports = {
  entry: [
    `./src/index.js`,
  ],
  output: {
    path: publicPath,
    publicPath: '/',
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
    extensions: ['', '.js', '.jsx'],
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
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
