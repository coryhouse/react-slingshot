// This script copies src/index.html into /dist/index.html
// and replaces the TrackJs placeholder with the actual TrackJS code for use in production
// when useTrackJs is set to true below and a trackJsToken is provided.
// This is a good example of using Node to do a simple file transformation.
// In this case, the transformation is useful since we only want to track errors in the built production code.
var fs = require('fs');
var colors = require('colors');
var useTrackJs = true; //If you choose not to use TrackJS, just set this to false and the build warning will go away.
var trackJsToken = ''; //If you choose to use TrackJS, insert your unique token here. To get a token, go to https://trackjs.com

fs.readFile('src/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err.bold.red);
  }

  var trackJsCode = '';
  if (useTrackJs) {
    if (trackJsToken) {
      trackJsCode = "<!-- BEGIN TRACKJS Note: This should be the first <script> on the page per https://my.trackjs.com/install --><script>window._trackJs = { token: '" + trackJsToken + "' };</script><script src=https://d2zah9y47r7bi2.cloudfront.net/releases/current/tracker.js></script><!-- END TRACKJS -->";
    } else {
      console.log('To track JavaScript errors, sign up for a free trial at TrackJS.com and enter your token in /tools/build.html on line 8.'.yellow);
    }
  }

  var result = data.replace(/<!--DO NOT REMOVE. KEEP AT TOP OF HEAD. TrackJS is inserted here during prod build-->/g, trackJsCode);

  fs.writeFile('dist/index.html', result, 'utf8', function (err) {
    if (err) return console.log(err.bold.red);
  });

  console.log('index.html written to /dist'.green);
});
