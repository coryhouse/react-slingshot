//More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
var webpack = require('webpack');
var webpackConfigBuilder = require('../webpack.config');
var colors = require('colors');
var args = require('yargs').argv;

process.env.NODE_ENV='production'; //this assures React is built in prod mode and that the Babel dev config doesn't apply.

var webpackConfig = webpackConfigBuilder('production');

webpack(webpackConfig).run(function(err, stats) {
  var inSilentMode = args.s; //set to true when -s is passed on the command

  if (!inSilentMode) console.log('Generating minified bundle for production use via Webpack...'.bold.blue);

  if (err) { //so a fatal error occurred. Stop here.
    console.log(err.bold.red);
    return 1;
  }

  var jsonStats = stats.toJson();

  if (jsonStats.hasErrors) return jsonStats.errors.map(error => console.log(error.red));

  if (jsonStats.hasWarnings && !inSilentMode) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  if (!inSilentMode) console.log('Webpack stats: ' + stats.toString());

  //if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green.bold);
  return 0;
});
