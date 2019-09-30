// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
import browserSync from 'browser-sync';
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const proxyMiddleware = require('http-proxy-middleware');
const devConfig = config.devServer;

const bundler = webpack(config);

let middleware = [];

if (devConfig && devConfig.proxy) {
  Object.keys(devConfig.proxy).forEach((context) => {
    middleware.push(proxyMiddleware(context, devConfig.proxy[context]));
  });
}

middleware = [
  ...middleware,
  historyApiFallback(
    {
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
    }
  ),

  webpackDevMiddleware(bundler, {
    // Dev middleware can't access config, so we provide publicPath
    publicPath: config.output.publicPath,

    // These settings suppress noisy webpack output so only errors are displayed to the console.
    noInfo: true,
    quiet: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },

    // for other settings see
    // https://webpack.js.org/guides/development/#using-webpack-dev-middleware
  }),

  // bundler should be the same as above
  webpackHotMiddleware(bundler)
];

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
  port: 3000,
  ui: {
    port: 3001
  },
  server: {
    baseDir: 'src',
    middleware
  },

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/*.html'
  ]
});
