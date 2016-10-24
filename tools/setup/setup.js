/* eslint-disable no-var */
var rimraf = require('rimraf');
var chalk = require('chalk');
var replace = require("replace");
var prompt = require("prompt");
var prompts = require('./setupPrompts');

var chalkSuccess = chalk.green;
var chalkProcessing = chalk.blue;

/* eslint-disable no-console */

console.log(chalkSuccess('Dependencies installed.'));

// prompt the user for updates to package.json
console.log(chalkProcessing('Updating package.json settings:'));
prompt.start();
prompt.get(prompts, function(err, result) {
  // parse user responses
  // default values provided for fields that will cause npm to complain if left empty
  const responses = [
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
      silent: true
    });
  });

  // reset package.json 'keywords' field to empty state
  replace({
    regex: /"keywords": \[[\s\S]+\]/,
    replacement: `"keywords": []`,
    paths: ['package.json'],
    recursive: false,
    silent: true
  });

  
  console.log(chalkSuccess('\nSetup complete!\n'));
  console.log(chalkSuccess('\nNote:  Check the git repository remove it as needed or reconfigure git for this project.\n'));
  console.log(chalkSuccess("You'll also need to change the repository \"url\": setting in package.json.\n"));
  
});
