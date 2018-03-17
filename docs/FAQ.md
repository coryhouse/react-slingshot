# FAQ

[Why does this exist?](#why-does-this-exist)

[What do the scripts in package.json do?](#what-do-the-scripts-in-packagejson-do)

[Can you explain the folder structure?](#can-you-explain-the-folder-structure)

[What are the dependencies in package.json used for?](#what-are-the-dependencies-in-packagejson-used-for)

[Where are the files being served from when I run `npm start`?](#where-are-the-files-being-served-from-when-i-run-npm-start)

[Where is index.html?](#where-is-indexhtml)

[How is Sass being converted into CSS and landing in the browser?](#how-is-sass-being-converted-into-css-and-landing-in-the-browser)

[I don't like the magic you just described above. I simply want to use a CSS file.](#i-dont-like-the-magic-you-just-described-above-i-simply-want-to-use-a-css-file)

[I just want an empty starter kit.](#i-just-want-an-empty-starter-kit)

[Do I have to use Redux?](#do-i-have-to-use-redux)

[How do I remove React Router?](#how-do-i-remove-react-router)

[How do I deploy this?](#how-do-i-deploy-this)

[Why are test files placed alongside the file under test (instead of centralized)?](#why-are-test-files-placed-alongside-the-file-under-test-instead-of-centralized)

[How do I debug?](#how-do-i-debug)

[Debugging in Visual Studio Code](#debugging-in-visual-studio-code)

[Why does the build use npm scripts instead of Gulp or Grunt?](#why-does-the-build-use-npm-scripts-instead-of-gulp-or-grunt)

[Why does package.json reference the exact version?](#why-does-packagejson-reference-the-exact-version)

[How do I handle images?](#how-do-i-handle-images)

[I'm getting an error when running npm install: Failed to locate "CL.exe"](#im-getting-an-error-when-running-npm-install-failed-to-locate-clexe)

[I can't access the external URL for Browsersync](#i-cant-access-the-external-url-for-browsersync)

[What about the Redux Devtools?](#what-about-the-redux-devtools)

[Hot reloading isn't working!](#hot-reloading-isnt-working)

[How do I setup code coverage reporting?](#how-do-i-setup-code-coverage-reporting)

---

## Why does this exist?

This starter kit implements best practices like testing, minification, bundling, and so on. It codifies a long list of decisions that you no longer have to make to get rolling. It saves you from the long, painful process of wiring it all together into an automated dev environment and build process. It's also useful as inspiration for ideas you might want to integrate into your current development environment or build process.

## What do the scripts in package.json do?

Unfortunately, scripts in package.json can't be commented inline because the JSON spec doesn't support comments, so I'm providing info on what each script in package.json does here.

| **Script** | **Description** |
|----------|-------|
| remove-demo | Removes the demo application so you can begin development. |
| prestart | Runs automatically before start. Calls remove-dist script which deletes the dist folder. This helps remind you to run the build script before committing since the dist folder will be deleted if you don't. ;) |
| start | Runs tests, lints, starts dev webserver, and opens the app in your default browser. |
| lint:tools | Runs ESLint on build related JS files. (eslint-loader lints src files via webpack when `npm start` is run) |
| clean-dist | Removes everything from the dist folder. |
| remove-dist | Deletes the dist folder. |
| create-dist | Creates the dist folder and the necessary subfolders. |
| prebuild | Runs automatically before build script (due to naming convention). Cleans dist folder, builds html, and builds sass. |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| test | Runs tests (files ending in .spec.js or .test.js) using Jest and outputs results to the command line. Watches all files so tests are re-run upon save. |
| test:cover | Runs tests as described above. Generates a HTML coverage report to ./coverage/index.html |
| test:cover:travis | Runs coverage as described above, however sends machine readable lcov data to Coveralls. This should only be used from the travis build! |
| analyze-bundle | Analyzes webpack bundles for production and gives you a breakdown of where modules are used and their sizes via a convenient interactive zoomable treemap. |

## Can you explain the folder structure?

```bash
.
├── .editorconfig             # Configures editor rules
├── .gitignore                # Tells git which files to ignore
├── .istanbul.yml             # Configure istanbul code coverage
├── .npmrc                    # Configures npm to save exact by default
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── actions               # Flux/Redux actions. List of distinct actions that can occur in the app.
│   ├── components            # React components
│   ├── constants             # Application constants including constants for Redux
│   ├── containers            # Top-level React components that interact with Redux
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.ejs             # Template for homepage
│   ├── index.js              # Entry point for your app
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│   ├── store                 # Redux store configuration
│   ├── styles                # CSS Styles, typically written in Sass
│   └── utils                 # Plain old JS objects (POJOs). Pure logic. No framework specific code here.
├── tools                     # Node scripts that run build related tools
│   ├── setup                 # Scripts for setting up a new project using React Slingshot
│   │   ├── setup.js          # Configure project set up
│   │   ├── setupMessage.js   # Display message when beginning set up
│   │   └── setupPrompts.js   # Configure prompts for set up
│   ├── build.js              # Runs the production build
│   ├── chalkConfig.js        # Centralized configuration for chalk (adds color to console statements)
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── nodeVersionCheck.js   # Confirm supported Node version is installed
│   ├── removeDemo.js         # Remove demo app
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
│   ├── startMessage.js       # Display message when development build starts
│   └── analyzeBundle.js      # Analyzes the webpack bundle
├── webpack.config.dev.js     # Configures webpack for development builds
└── webpack.config.prod.js    # Configures webpack for production builds
```

## What are the dependencies in package.json used for?

| **Dependency** | **Use** |
|----------|-------|
|autoprefixer | Automatically adds vendor prefixes, using data from Can I Use. |
|object-assign | Polyfill for Object.assign |
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-eslint|Integrates Babel with ESLint so experimental JS features ESLint doesn't support yet can be linted.
|babel-jest|Integrates Babel with Jest so tests are transpiled|
|babel-loader|Adds Babel support to Webpack |
|babel-polyfill|Polyfills features that cannot be transpiled|
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-plugin-transform-react-constant-elements | Performance optimization: Hoists the creation of elements that are fully static to the top level. reduces calls to React.createElement and the resulting memory allocations. [More info](https://medium.com/doctolib-engineering/improve-react-performance-with-babel-16f1becfaa25#.2wbkg8g4d) |
|babel-preset-latest|Babel preset for ES2015, ES2016 and ES2017|
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-stage-1| Include stage 1 feature support in Babel |
|browser-sync| Supports synchronized testing on multiple devices and serves local app on public URL |
|chalk|Adds color support to terminal |
|connect-history-api-fallback  | Support reloading deep links |
|coveralls|For tracking and displaying code coverage information via Coveralls.io|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-loader|Adds ESLint support to Webpack |
|eslint-plugin-import|Adds ES6 import related linting rules|
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|eslint-watch|Wraps ESLint to provide file watch support and enhanced command line output|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build |
|file-loader| Adds file loading support to Webpack |
|html-webpack-plugin|Generates custom index.html for each environment as part of webpack build|
|identity-obj-proxy|Mocks webpack imports that Jest doesn't understand such as image and CSS imports.|
|jest|Testing framework|
|json-loader|Enhance Webpack to support importing .json files|
|mockdate|Mock dates in testing|
|node-sass| Adds SASS support to Webpack |
|npm-run-all| Run multiple scripts at the same time |
|open|Open the app in your default browser|
|postcss-loader| Adds PostCSS support to Webpack |
|react|React library |
|redux-immutable-state-invariant|Alert if Redux state is mutated (helps catch bugs, since Redux state is immutable)|
|react-dom|React library for DOM rendering |
|react-redux|Redux library for connecting React components to Redux |
|react-router|React library for routing |
|react-test-renderer|Renders React components to pure JavaScript objects without depending on the DOM or a native mobile environment|
|redux|Library for unidirectional data flows |
|redux-thunk|Middleware for redux that allows actions to be declared as functions |
|replace|Renaming files, cross-platform|
|rimraf|Delete files, cross-platform |
|sass-loader| Adds Sass support to Webpack|
|style-loader| Add Style support to Webpack |
|url-loader|Add Webpack support for loading files via url with querystring |
|webpack| Bundler with plugin system and integrated development server |
|webpack-bundle-analyzer| Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap |
|webpack-dev-middleware| Used to integrate Webpack with Browser-sync |
|webpack-hot-middleware| Use to integrate Webpack's hot reloading support with Browser-sync |
|webpack-md5-hash| Hash bundles, and use the hash for the filename so that the filename only changes when contents change|

## Where are the files being served from when I run `npm start`?

Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is /src, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to /dist and the app is served from /dist.

## Where is index.html?

It's generated by webpack using htmlWebpackPlugin. This plugin dynamically generates index.html based on the configuration in webpack.config. It also adds references to the JS and CSS bundles using hash-based filenames to bust cache. Separate bundles for vendor and application code are created and referencing within the generated index.html file so that vendor libraries and app code can be cached separately by the browser. The bundle filenames are based on the file's hash, so the filenames only change when the file contents change. For more information on this, read [Long-term caching of static assets with Webpack](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.4aeatmtfz) and [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)

## How is Sass being converted into CSS and landing in the browser?

Magic! Okay, more specifically, we're handling it differently in dev (`npm start`) vs prod (`npm run build`)

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into bundle.js. Sounds odd, but it works!
 3. bundle.js contains code that loads styles into the &lt;head&gt; of index.html via JavaScript. This is why you don't see a stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also creates a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into styles.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

For both of the above methods, a separate sourcemap is generated for debugging Sass in [compatible browsers](http://thesassway.com/intermediate/using-source-maps-with-sass).

## I don't like the magic you just described above. I simply want to use a CSS file.

No problem. Reference your CSS file in index.html, and add a step to the build process to copy your CSS file over to the same relative location /dist as part of the build step. But be forwarned, you lose style hot reloading with this approach.

## I just want an empty starter kit.

This starter kit includes an example app so you can see how everything hangs together on a real app. When you're done reviewing it, run this to remove the demo app:

  `npm run remove-demo`

Don't want to use Redux? See the next question for some steps on removing Redux.

## Do I have to use Redux?

Nope. Redux is useful for applications with more complex data flows. If your app is simple, Redux is overkill. Remove Redux like this:

 1. Run `npm run remove-demo`
 2. Uninstall Redux related packages: `npm uninstall redux react-redux redux-thunk`
 3. Create a new empty component in /components.
 4. Call render on the new top level component you created in step 3 in src/index.js.

## How do I remove React Router?

 1. Uninstall React Router and routing related packages: `npm uninstall --save react-router-dom`
 2. Remove `import { Switch, NavLink, Route } from 'react-router-dom';` from top of `src/components/App.js`, add a reference to `src/components/FuelSavingsForm.js`, and replace body of (implicit) render with this: `<FuelSavingsPage />`.

## How do I deploy this?
`npm run build`. This will build the project for production. It does the following:
* Minifies all JS
* Sets NODE_ENV to prod so that React is built in production mode
* Places the resulting built project files into /dist. (This is the folder you'll expose to the world).

If the app destination is different from the server root (`/`) you need to reconfigure `output.publicPath` in `webpack.config.prod.js` before building the app. See [webpack docs](https://webpack.js.org/configuration/output/#output-publicpath) for more information.

Check out this [blog post](www.latrovacommits.com/en/2017/12/14/how-publish-dist-folder-heroku/) showing two ways of deploying to Heroku.

## Why are test files placed alongside the file under test (instead of centralized)?

Streamlined automated testing is a core feature of this starter kit. All tests are placed in files that end in .spec.js. Spec files are placed in the same directory as the file under test. Why?
+ The existence of tests is highly visible. If a corresponding .spec file hasn't been created, it's obvious.
+ Easy to open since they're in the same folder as the file being tested.
+ Easy to create new test files when creating new source files.
+ Short import paths are easy to type and less brittle.
+ As files are moved, it's easy to move tests alongside.

That said, you can of course place your tests under __test__ instead. Then Jest will simply look in /test to find your spec files.

## How do I debug?

Since browsers don't currently support ES6, we're using Babel to compile our ES6 down to ES5. This means the code that runs in the browser looks different than what we wrote. But good news, a [sourcemap](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is generated to enable easy debugging. This means your original JS source will be displayed in your browser's dev console.
*Note:* When you run `npm start`, no JS is minified. Why? Because minifying slows the build. So JS is only minified when you run the `npm run build` script. See [more on building for production above](https://github.com/coryhouse/react-slingshot/blob/master/docs/FAQ.md#how-do-i-deploy-this).

Also note that no actual physical files are written to the filesystem during the dev build. **For performance, all files exist in memory when served from the webpack server.**. Physical files are only written when you run `npm run build`.

**Tips for debugging via sourcemaps:**

 1. Browsers vary in the way they allow you to view the original source. Chrome automatically shows the original source if a sourcemap is available. Safari, in contrast, will display the minified source and you'll [have to cmd+click on a given line to be taken to the original source](http://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7).
 2. Do **not** enable serving files from your filesystem in Chrome dev tools. If you do, Chrome (and perhaps other browsers) may not show you the latest version of your code after you make a source code change. Instead **you must close the source view tab you were using and reopen it to see the updated source code**. It appears Chrome clings to the old sourcemap until you close and reopen the source view tab. To clarify, you don't have to close the actual tab that is displaying the app, just the tab in the console that's displaying the source file that you just changed.
 3. If the latest source isn't displaying the console, force a refresh. Sometimes Chrome seems to hold onto a previous version of the sourcemap which will cause you to see stale code.

## Debugging in Visual Studio Code:

  * Install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.
  * Follow the instructions on how to [configure debugging in Visual Studio code](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#using-the-debugger).

Don't see your favorite code editor debugging configuration here? Submit a PR and we'll be glad to add it to the FAQ.md.

## Why does the build use npm scripts instead of Gulp or Grunt?

In short, Gulp is an unnecessary abstraction that creates more problems than it solves. [Here's why](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n).

## Why does package.json reference the exact version?

This assures that the build won't break when some new version is released. Unfortunately, many package authors don't properly honor [Semantic Versioning](http://semver.org), so instead, as new versions are released, we'll test them and then introduce them into React Slingshot. But yes, this means when you do `npm update` no new dependencies will be pulled down. You'll have to update package.json with the new version manually.

## How do I handle images?

Via [Webpack's file loader](https://github.com/webpack/file-loader). Example:

```html
<img src={require('./src/images/myImage.jpg')} />
```

Webpack will then intelligently handle your image for you. For the production build, it will copy the physical file to /dist, give it a unique filename, and insert the appropriate path in your image tag.

## I'm getting an error when running npm install: Failed to locate "CL.exe"

On Windows, you need to install extra dependencies for browser-sync to build and install successfully. Follow the getting started steps above to assure you have the necessary dependencies on your machine.

## I can't access the external URL for Browsersync

To hit the external URL, all devices must be on the same LAN. So this may mean your dev machine needs to be on the same Wifi as the mobile devices you're testing. Alternatively, you can use a tool like [localtunnel](https://localtunnel.github.io/www/) or [ngrok](https://ngrok.com) to expose your app via a public URL. This way, you can interact with the Browsersync hosted app on any device.

## What about the Redux Devtools?

Install the [Redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) in Chrome Developer Tools. If you're interested in running Redux dev tools cross-browser, Barry Staes created a [branch with the devtools incorporated](https://github.com/coryhouse/react-slingshot/pull/27).

## Hot reloading isn't working!

Hot reloading doesn't always play nicely with stateless functional components at this time. [This is a known limitation that is currently being worked](https://github.com/gaearon/babel-plugin-react-transform/issues/57). To avoid issues with hot reloading for now, use a traditional class-based React component at the top of your component hierarchy.

## How do I setup code coverage reporting?

Use the `npm run test:cover` command to run the tests, building a code coverage report. The report is written to `/coverage/lcov-report/index.html`. Slingshot provides a script for this:

```bash
npm run open:cover
```

You can add code coverage metrics to your `README.md` file and pull by integrating with [Coveralls](https://coveralls.io/).

1. Sign in to Coveralls with your GitHub account.
2. Authorise Coveralls to access your repositories.
3. Choose 'Add Repo' and select your repo.

That's it! Travis will now execute the `npm run test:cover:travis` script after a successful build, which will write the coverage report in the standard lcov format and send it directly to Coveralls. The environment variables provided for travis jobs are used to automatically target the correct Coveralls project, as long as it is set up as described above.

You can get the badge from the Coveralls website.

## What about TypeScript?

Here's a [fork with TS support](https://github.com/typescriptcrew/ts-react-slingshot).
