<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/3129129/22811426/bb69dc06-ef0c-11e6-8092-a0bea9060b35.png"/>
</p>

---


[![Build status: Linux](https://img.shields.io/travis/coryhouse/react-slingshot.svg?style=flat-square&label=Linux+Build&logo=travis)](https://travis-ci.org/coryhouse/react-slingshot)
[![Build status: Windows](https://img.shields.io/appveyor/ci/coryhouse/react-slingshot/master.svg?style=flat-square&label=Windows+Build&logo=appveyor)](https://ci.appveyor.com/project/coryhouse/react-slingshot/branch/master)
[![Dependency Status](https://img.shields.io/david/coryhouse/react-slingshot.svg?logo=npm&style=flat-square)](https://david-dm.org/coryhouse/react-slingshot)
[![Coverage Status](https://img.shields.io/coveralls/github/coryhouse/react-slingshot/master.svg?logo=github&style=flat-square)](https://coveralls.io/github/coryhouse/react-slingshot?branch=master)

# React Slingshot ![](https://img.shields.io/github/issues-pr/coryhouse/react-slingshot.svg?style=flat-square)

_A comprehensive starter kit for rapid application development using React._

---

## Why Slingshot?

* *__Skip The Fuss. Run One Command. Start Developing.__*

  Regardless which NodeJS package manager you prefer, React Slingshot ships ready to go with full support for both __NPM__ and __YARN__ out of the box. Tackling a new project and wanna skip the headaches we all inevitably face when setting up a fresh development environment? If you'd prefer to jump straight into development and getting down to doing what you do best; With React Slingshot, all you need to do is run one, simple command:

  - __NPM:__ `npm start`
  - __YARN:__ `yarn start`

  Then you're good to go!

* *__Tool Agnostic, Rapid Development Feedback__*

  React Slingshot makes creating apps quick and easy by offering a robust, pre-configured feature set that compliments any existing tools you already prefer. Reduce overall time spent in development at zero expense on your part. Build your application while simultaneously, automatic hot-module script reload, live-styling changes available in real-time across multiple devices, and automated tasks like linting and testing all run quietly behind the scenes. Each time you hit save, see your code edits instantly reflected in the browser without ever actually forcing a manual refresh. No browser refresh means your application state gets perserved during active development.

* *__Only A Single Command Line Interface Necessary__*

  No need to spend time setting up complex development debugging, logging, and notification configurations. The terminal that runs your React Slingshot based project is all you'll need. Trim down on desktop clutter and tooling dependencies. The same CLI running your project doubles as an output console which continously streams relevant development data while you work.

* *__No More "JavaScript Fatigue"__*

  Driven by an active community of contributers, React Slingshot sees regular updates which include the latest, bleeding-edge development enhancements. The project itself is [built atop the most powerful, widely understood community resources available](#technologies) for working with React.

* *__Example App With Scripts Included__*

  Whether you're new to ReactJS and want to start learning, or feel like you don't quite yet have a strong grasp on working with ReactJS alongside Redux, or even if you're coming back to ReactJS/Redux after having spent time working in a completely different tech stack and just need a good refresher; React Slingshot has you covered. By default, any time you make a fresh clone of the React Slingshot Github repository, it comes pre-packaged with the codebase for an example app. If and when you decide you no longer need the example app anymore, and are ready to shave off excess code bloat, run built-in scripts that leave you with just the bare essentials needed for development. The example app itself isn't another basic "Todo List", or any other demo you're used to seeing. React Slingshot purposefully takes covering ReactJS/Redux development fundamentals a step further; Showcasing current best practices in using ReactJS alongside Redux, as well as common ReactJS design patterns like "containers", "smart" and "dumb" components, "contolled" versus "un-controlled" components, etc. No 3rd party libraries that abstract out any of the heavy lifting are used. You get a clear, "vanillaJS" approach thats demonstrates the ReactJS way of doing things. It also serves as mini-presentation for some of the functionality React Slingshot offers for rapid application development. In terms of what you can expect to learn, the example app provides minimal, yet effective, illustrations of a few complex ReactJS/Redux design concepts you'd commonly work to implement in many projects. These include:

    * Application state management while actively traversing app navigation.

    * Front End routing techniques as a fallback for handling non-existent paths provided by input user input.

    * Both asynchronous and synchronous functionality as UI/UX actions.

    * **_and much more_**


* *__Automated Production Ready Distributions__*

  Ready to show off your finished app to the world? Running a single command:

  - __NPM:__ `npm run build`
  - __YARN:__ `yarn build`

  _Gets you all of this:_

  [![React Slingshot Production Build](https://img.youtube.com/vi/qlfDLsX-J0U/0.jpg)](https://www.youtube.com/watch?v=qlfDLsX-J0U)

---


## Requirements

> _**IMPORTANT:** Only the supported version of the package manager you intend to use is required._

__NodeJS__ \
_To check your current active version of `node`, run `node -v`_

  * ![](https://img.shields.io/badge/dynamic/json.svg?style=flat-square&label=node+version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fcoryhouse%2Freact-slingshot%2Fmaster%2Fpackage.json&query=%24.engines.node&colorB=orange)

__NPM__ \
  _To check your current active version of `npm`, run `npm -v`_

  * ![](https://img.shields.io/badge/dynamic/json.svg?style=flat-square&label=npm+version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fcoryhouse%2Freact-slingshot%2Fmaster%2Fpackage.json&query=%24.engines.npm&colorB=orange)

__YARN__ \
  _To check your current active version of `yarn`, run `yarn -v`_

  * ![](https://img.shields.io/badge/dynamic/json.svg?style=flat-square&label=yarn+version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fcoryhouse%2Freact-slingshot%2Fmaster%2Fpackage.json&query=%24.engines.yarn&colorB=orange)

---


## Get Started

1. **Initial Machine Setup**

    First time running the starter kit? Then complete the [Initial Machine Setup](#initial-machine-setup).

2. **Clone the project**

    `git clone https://github.com/coryhouse/react-slingshot.git`.

3. **Run the setup script**

    - __NPM:__ `npm run setup`
    - __YARN:__ `yarn setup`

4. **Run the example app**

    - __NPM:__ `npm start -s`
    - __YARN:__ `yarn start --silent`

    This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The `-s` and `--silent` flags are optional. It enables silent mode which suppresses unnecessary messages during the build.

5. **Review the example app.**

    This starter kit includes a working example app that calculates fuel savings. Note how all source code is placed under /src. Tests are placed alongside the file under test. The final built app is placed under /dist. These are the files you run in production.

6. **Delete the example app files.**

    Once you're comfortable with how the example app works, you can [delete those files and begin creating your own app](./docs/FAQ.md#i-just-want-an-empty-starter-kit).

7. **Having issues?** See [Having Issues?](#having-issues-try-these-things-first).

## Initial Machine Setup

1. **Install [Node 8.0.0 or greater](https://nodejs.org)**

    Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).

2. **Install [Git](https://git-scm.com/downloads)**.

3. **[Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)** to assure hot reloading works properly.

4. Complete the steps below for your operating system:

    ### macOS

    * Install [watchman](https://facebook.github.io/watchman/) via `brew install watchman` or fswatch via `brew install fswatch` to avoid [this issue](https://github.com/facebook/create-react-app/issues/871) which occurs if your macOS has no appropriate file watching service installed.

    ### Linux

    * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).

        `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.

    ### Windows

    * **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
    * **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows.

      [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler.

      If you already have Visual Studio installed:
      Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop.
      The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

---

## Having Issues? Try these things first

1. Make sure you ran all steps in [Get started](#get-started) including the [initial machine setup](#initial-machine-setup).

2. From within the project directory, run:

    - __NPM:__ `npm install`
    - __YARN:__ `yarn`


    If you forget to do this, you'll see this: `babel-node: command not found`.
3. Install the latest version of Node.

4. Make sure files with names that begin with a dot (.editorconfig, .gitignore, .npmrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.

5. Don't run the project from a symbolic link. It may cause issues with file watches.

6. Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in this project.

7. Make sure you don't have NODE_ENV set to production on your machine. If you do then the [development dependencies won't be installed](https://github.com/coryhouse/react-slingshot/issues/400#issuecomment-290497767). Here's [how to check](http://stackoverflow.com/a/27939821/26180).

8. Install watchman with `brew install watchman` if you are having the following error after an initial run of `npm start -s` or `yarn start --silent`:

    ```bash
    2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
    2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
    events.js:160
          throw er; // Unhandled 'error' event
          ^

    Error: Error watching file for changes: EMFILE
        at exports._errnoException (util.js:1022:11)
        at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
    ```

9. __Tip:__ Things to check if you get an error on build or an error when running `npm run lint` or `yarn lint`:

    * If ESW found an error or warning in your project (e.g. console statement or a missing semi-colon), the lint thread will exit with `Exit status 1`. To fix:

      1. In the `package.json`, edit the `lint` script to read `"esw webpack.config.* src tools; exit 0"`

      2. Still in `package.json`, edit the `lint:watch` script to `"esw webpack.config.* src tools --watch; exit 0"`

        > __Note:__ Adding `exit 0` will allow applications scripts to ignore the status 1, allowing ESW to print all warnings and errors.

    * Make sure any global install you have of `eslint`/`esw` has a version that matches the version used in the project. This will ensure the `esw` keyword is resolved.

10. If you are running into errors that resemble something like `Node Sass does not yet support your current environment on macOS XXX` after the initial run of `npm start -s` or `yarn start --silent`. You may need to rebuild `node-sass` before you can continue. To do so, run:

  - __NPM:__ `npm run rebuildNodeSass`
  - __YARN:__ `yarn rebuildNodeSass`

---

## Technologies

Slingshot offers a rich development experience using the following technologies:

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux), [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux), [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)|
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](https://webpack.js.org) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [TrackJS](https://trackjs.com/) | JavaScript error tracking. | [Free trial](https://my.trackjs.com/signup)|
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |

The starter kit includes a working example app that puts all of the above to use.

---

## Questions?

Check out the [FAQ](./docs/FAQ.md)
