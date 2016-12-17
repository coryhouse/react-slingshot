var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel', 'eslint']}
    ]
  }
};
