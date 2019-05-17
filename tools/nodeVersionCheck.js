/* eslint-disable */
var exec = require('child_process').exec;

exec('node -v', function (err, stdout) {
  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 8) {
    throw new Error('React Slingshot requires node 8.0 or greater.');
  }
});
