// For info about this file refer to webpack and webpack-hot-middleware documentation
// Rather than having hard coded webpack.config.js for each environment, this
// file generates a webpack config for the environment passed to the getConfig method.
var webpack = require('webpack');
var path = require('path');

var getPlugins = function(env) {
  var GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env == 'development'
  };

  var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS) //Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
  ];

  switch(env) {
    case 'production':
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}));
      break;
    case 'development':
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NoErrorsPlugin());
      break;
  }

  return plugins;
};

var getLoaders = function(env) {
  var loaders = [
    { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel', 'eslint'] },
    {
      test: /(\.css|\.scss)$/,
      include: path.join(__dirname, 'src'),
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    }
  ];

  return loaders;
};

var getEntry = function(env) {
  var entry = [];

  if (env == 'development') { //only want hot reloading when in dev.
    entry.push('webpack-hot-middleware/client');
  }

  entry.push('./src/index');
  return entry;
};

module.exports = function getConfig(env) {
  return {
    debug: true,
    devtool: env == 'production' ? 'source-map' : 'eval-source-map', //more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    noInfo: true, //set to false to see a list of every file being bundled.
    entry: getEntry(env),
    target: env == 'test' ? 'node' : 'web', //necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
      path: __dirname + '/dist', //Note: Physical files are only output by the production build task `npm run build`.
      publicPath: '',
      filename: 'bundle.js'
    },
    plugins: getPlugins(env),
    module: {
      loaders: getLoaders(env)
    }
  };
};
