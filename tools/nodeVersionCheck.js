/* eslint-disable */
var exec = require('child_process').exec;
exec('node -v', function (err, stdout, stderr) {
  if (err) throw err;
  if (parseFloat(stdout) < 4) {
    throw new Error('ERROR: React Slingshot requires node 4.0 or greater.');
    process.exit(1);
  }
});
