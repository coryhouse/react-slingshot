var rimraf = require('rimraf');
var chalk = require('chalk');
var replace = require("replace");
var prompt = require("prompt");

var prompts = require('./setupPrompts');

console.log(chalk.green('Dependencies installed.'));

// remove the original git repository
rimraf('.git', error => {
  if (error) throw new Error(error);
});
console.log(chalk.green('Original Git repository removed.\n'));

// prompt the user for updates to package.json
console.log(chalk.blue('Updating package.json settings:'));
prompt.start();
prompt.get(prompts, function(err, result) {
  // parse user responses
  // (default values provided for fields that will cause npm to complain if left empty)
  var responses = [
    {
      key: 'name',
      value: result.projectName || 'new-project'
    },
    {
      key: 'version',
      value: result.version || '0.1.0'
    },
    {
      key: 'author',
      value: result.author
    },
    {
      key: 'license',
      value: result.license || 'MIT'
    },
    {
      key: 'description',
      value: result.description
    },
    // simply use an empty URL here to clear the existing repo URL
    {
      key: 'url',
      value: ''
    }
  ];

  // update package.json with the user's values
  responses.forEach(res => {
    replace({
      regex: `("${res.key}"): "(.*?)"`,
      replacement: `$1: "${res.value}"`,
      paths: ['package.json'],
      recursive: false,
      silent: true,
    });
  })

  // remove all setup scripts from the 'tools' folder
  console.log(chalk.green('\nSetup complete! Cleaning up...\n'));
  rimraf('./tools/setup', error => {
    if (error) throw new Error(error);
  });
});
