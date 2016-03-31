// For info about this file refer to webpack and webpack-hot-middleware documentation
// Rather than having hard coded webpack.config.js for each environment, this
// file generates a webpack config for the environment passed to the getConfig method.
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const developmentEnvironment = 'development';
const productionEnvironment = 'production';
const testEnvironment = 'test';

const getPlugins = (env) => {
  const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env === developmentEnvironment,
  };

  const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),
  ];

  switch (env) {
    default:
    case productionEnvironment:
      plugins.push(new ExtractTextPlugin('styles.css'));
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin());
      break;

    case developmentEnvironment:
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NoErrorsPlugin());
      break;
  }

  return plugins;
};

const getEntry = (env) => {
  const entry = [];

  if (env === developmentEnvironment) { // only want hot reloading when in dev.
    entry.push('webpack-hot-middleware/client?reload=true');
  }

  entry.push('./src/index');

  return entry;
};

const getLoaders = (env) => {
  const loaders = [
    {
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loaders: ['babel', 'eslint'],
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: ['file'],
    },
  ];

  if (env === productionEnvironment) {
    // generate separate physical stylesheet for production build using ExtractTextPlugin.
    // This provides separate caching and avoids a flash of unstyled content on load.
    loaders.push({
      test: /(\.css|\.scss)$/,
      loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap"),
    });
  } else {
    loaders.push({
      test: /(\.css|\.scss)$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
    });
  }

  return loaders;
};

function getConfig(env) {
  return {
    debug: true,
    // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps
    // and https://webpack.github.io/docs/configuration.html#devtool
    devtool: env === productionEnvironment ? 'source-map' : 'cheap-module-eval-source-map',
    // set to false to see a list of every file being bundled.
    noInfo: true,
    entry: getEntry(env),
    // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    target: env === testEnvironment ? 'node' : 'web',
    output: {
      // Note: Physical files are only output by the production build task `npm run build`.
      path: `${__dirname}/dist`,
      publicPath: '/',
      filename: 'bundle.js',
    },
    plugins: getPlugins(env),
    module: {
      loaders: getLoaders(env),
    },
  };
}

export default getConfig;
