# Contributing

## Quick Start
Fork this project, then:
```
npm install
npm start
```
Submit a pull request to the master branch to request merging your change.

## Branch Organization
All features should be worked out of a well named feature branch. Branch off the master branch.  Submit a pull request to merge your work into the master branch when your work is ready for review.

## npm Scripts
This project uses npm scripts for automation

|Script|Description|
|------|-----------|
|start|Start local webserver to host the docs at localhost:3000|
|test|Run tests|

There are many other scripts in package.json, but these are the two you're most likely to run.

## Semantic Versioning
This project follows [semantic versioning](http://semver.org). We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes.

## Proposing a Change
If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend filing an issue. This lets us reach an agreement on your proposal before you put significant effort into it.

## Style Guide
ESLint will catch most styling issues that may exist in your code. You can check the status of your code styling by running npm start.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb's Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

## Code Conventions
- Use semicolons ;
- 2 spaces for indentation (no tabs). Install the [Editorconfig](http://editorconfig.org) plugin for your editor to enforce this automatically.
- Prefer ' over "
