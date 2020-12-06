/* eslint-disable */
var exec = require('child_process').exec;

exec('node -v', function (err, stdout) {
  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 10) {
    throw new Error('React Slingshot requires node 10.0 or greater.');
  }
});
