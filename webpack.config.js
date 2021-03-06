var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
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
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
