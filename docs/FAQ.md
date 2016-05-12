##FAQ
###Why does this exist?
This starter kit implements best practices like testing, minification, bundling, and so on. It codifies a long list of decisions that you no longer have to make to get rolling. It saves you from the long, painful process of wiring it all together into an automated dev environment and build process. It's also useful as inspiration for ideas you might want to integrate into your current development environment or build process.

###What do the scripts in package.json do?
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
| build:html | Adds trackJS tracking script and copies to /dist. |
| prebuild | Runs automatically before build script (due to naming convention). Cleans dist folder, builds html, and builds sass. |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| test | Runs tests (files ending in .spec.js) using Mocha and outputs results to the command line. Watches all files so tests are re-run upon save. |

### Can you explain the folder structure?
```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .gitignore                # Tells git which files to ignore
├── .npmrc                    # Configures npm to save exact by default
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── actions               # Flux/Redux actions. List of distinct actions that can occur in the app.  
│   ├── businessLogic         # Plain old JS objects (POJOs). Pure logic. No framework specific code here.
│   ├── components            # React components
│   ├── constants             # Application constants including constants for Redux
│   ├── containers            # Top-level React components that interact with Redux
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.html            # Start page
│   ├── index.js              # Entry point for your app
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│   ├── store                 # Redux store configuration
│   └── styles                # CSS Styles, typically written in Sass
├── tools                     # Node scripts that run build related tools
│   ├── build.js              # Runs the production build
│   ├── buildHtml.js          # Builds index.html
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
└── webpack.config.js         # Configures webpack
```

### What are the dependencies in package.json used for?
| **Dependency** | **Use** |
|----------|-------|
|connect-history-api-fallback  | Support reloading deep links |
|object-assign | Polyfill for Object.assign |
|react|React library |
|react-dom|React library for DOM rendering |
|react-redux|Redux library for connecting React components to Redux |
|react-router|React library for routing |
|redux|Library for unidirectional data flows |
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-loader|Adds Babel support to Webpack |
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-plugin-react-transform| Add support for transforming React code to Babel |
|babel-preset-es2015|Babel preset for ES2015|
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-stage-1| Include stage 1 feature support in Babel |
|browser-sync| Supports synchronized testing on multiple devices and serves local app on public URL |
|chai|Assertion library for use with Mocha|
|chalk|Adds color support to terminal |
|cheerio|Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-loader|Adds ESLint support to Webpack |
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|eslint-watch|Wraps ESLint to provide file watch support and enhanced command line output|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build |
|file-loader| Adds file loading support to Webpack |
|mocha| JavaScript testing library |
|node-sass| Adds SASS support to Webpack |
|parallelshell| Display results of multiple commands on single command line |
|react-addons-test-utils| Adds React TestUtils |
|rimraf|Delete files |
|sass-loader| Adds Sass support to Webpack|
|sinon| Standalone test spies, stubs and mocks for JavaScript |
|sinon-chai| Extends Chai with assertions for the Sinon.JS mocking framework|
|style-loader| Add Style support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Used to integrate Webpack with Browser-sync |
|webpack-hot-middleware| Use to integrate Webpack's hot reloading support with Browser-sync |
|yargs| Easily parse command-line arguments |

### Where are the files being served from when I run `npm start`?
Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is /src, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to /dist and the app is served from /dist.

### How is Sass being converted into CSS and landing in the browser?
Magic! Okay, more specifically, we're handling it differently in dev (`npm start`) vs prod (`npm run build`)

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into bundle.js. Sounds odd, but it works!
 3. bundle.js contains code that loads styles into the &lt;head&gt; of index.html via JavaScript. This is why you don't see a stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into styles.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

For both of the above methods, a separate sourcemap is generated for debugging Sass in [compatible browsers](http://thesassway.com/intermediate/using-source-maps-with-sass).

### I don't like the magic you just described above. I simply want to use a CSS file.
No problem. Reference your CSS file in index.html, and add a step to the build process to copy your CSS file over to the same relative location /dist as part of the build step. But be forwarned, you lose style hot reloading with this approach.

### I just want an empty starter kit.
This starter kit includes an example app so you can see how everything hangs together on a real app. When you're done reviewing it, run this to remove the demo app:

  `npm run remove-demo`  

Don't want to use Redux? See the next question for some steps on removing Redux.

### Do I have to use Redux?
Nope. Redux is useful for applications with more complex data flows. If your app is simple, Redux is overkill. Remove Redux like this:

 1. Run `npm run remove-demo`
 2. Uninstall Redux related packages: `npm uninstall redux react-redux redux-thunk`
 3. Create a new empty component in /components.
 4. Call render on the new top level component you created in step 3 in src/index.js.

### How do I remove React Router?
 1. Uninstall React Router and routing related packages: `npm uninstall --save react-router connect-history-api-fallback`
 2. Delete the following files: `src/routes.js`
 3. Remove `import { Link, IndexLink } from 'react-router';` from top of `src/components/App.js`, add a reference to `src/components/FuelSavingsForm.js`, and replace body of (implicit) render with this: `<FuelSavingsPage />`.

### How do I deploy this?
`npm run build`. This will build the project for production. It does the following:
* Minifies all JS
* Sets NODE_ENV to prod so that React is built in production mode
* Places the resulting built project files into /dist. (This is the folder you'll expose to the world).

### Why are test files placed alongside the file under test (instead of centralized)?
Streamlined automated testing is a core feature of this starter kit. All tests are placed in files that end in .spec.js. Spec files are placed in the same directory as the file under test. Why?
+ The existence of tests is highly visible. If a corresponding .spec file hasn't been created, it's obvious.
+ Easy to open since they're in the same folder as the file being tested.
+ Easy to create new test files when creating new source files.
+ Short import paths are easy to type and less brittle.
+ As files are moved, it's easy to move tests alongside.

That said, you can of course place your tests under /test instead, which is the Mocha default. If you do, you can simplify the test script to no longer specify the path. Then Mocha will simply look in /test to find your spec files.

### How do I debug?
Since browsers don't currently support ES6, we're using Babel to compile our ES6 down to ES5. This means the code that runs in the browser looks different than what we wrote. But good news, a [sourcemap](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is generated to enable easy debugging. This means your original JS source will be displayed in your browser's dev console.
*Note:* When you run `npm start`, no JS is minified. Why? Because minifying slows the build. So JS is only minified when you run the `npm run build` script. See [more on building for production below](https://github.com/coryhouse/react-slingshot#how-do-i-deploy-this).

Also note that no actual physical files are written to the filesystem during the dev build. **For performance, all files exist in memory when served from the webpack server.**. Physical files are only written when you run `npm run build`.

**Tips for debugging via sourcemaps:**

 1. Browsers vary in the way they allow you to view the original source. Chrome automatically shows the original source if a sourcemap is available. Safari, in contrast, will display the minified source and you'll [have to cmd+click on a given line to be taken to the original source](http://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7).  
 2. Do **not** enable serving files from your filesystem in Chrome dev tools. If you do, Chrome (and perhaps other browsers) may not show you the latest version of your code after you make a source code change. Instead **you must close the source view tab you were using and reopen it to see the updated source code**. It appears Chrome clings to the old sourcemap until you close and reopen the source view tab. To clarify, you don't have to close the actual tab that is displaying the app, just the tab in the console that's displaying the source file that you just changed.  
 3. If the latest source isn't displaying the console, force a refresh. Sometimes Chrome seems to hold onto a previous version of the sourcemap which will cause you to see stale code.

### Why does the build use npm scripts instead of Gulp or Grunt?
In short, Gulp is an unnecessary abstraction that creates more problems than it solves. [Here's why](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n).

### Why does package.json reference the exact version?
This assures that the build won't break when some new version is released. Unfortunately, many package authors don't properly honor [Semantic Versioning](http://semver.org), so instead, as new versions are released, I'll test them and then introduce them into the starter kit. But yes, this means when you do `npm update` no new dependencies will be pulled down. You'll have to update package.json with the new version manually.

### How do I handle images?
Via <a href="https://github.com/webpack/file-loader">Webpack's file loader</a>. Example: 

```
<img src={require('./src/images/myImage.jpg')} />

```

Webpack will then intelligently handle your image for you. For the production build, it will copy the physical file to /dist, give it a unique filename, and insert the appropriate path in your image tag.

### I'm getting an error when running npm install: Failed to locate "CL.exe"
On Windows, you need to install extra dependencies for browser-sync to build and install successfully. Follow the getting started steps above to assure you have the necessary dependencies on your machine.

### I can't access the external URL for Browsersync
To hit the external URL, all devices must be on the same LAN. So this may mean your dev machine needs to be on the same Wifi as the mobile devices you're testing.

### What about the Redux Devtools?
Install the [Redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) in Chrome Developer Tools. If you're interested in running Redux dev tools cross-browser, Barry Staes created a [branch with the devtools incorporated](https://github.com/coryhouse/react-slingshot/pull/27).

### Hot reloading isn't working!
Hot reloading doesn't always play nicely with stateless functional components at this time. [This is a known limitation that is currently being worked](https://github.com/gaearon/babel-plugin-react-transform/issues/57). To avoid issues with hot reloading for now, use a traditional class-based React component at the top of your component hierarchy.
