# webpack-pre-emit-plugin

[Webpack](http://webpack.js.org/) plugin that gives ability to add callback
before emit.

Inspired by [pre-build-webpack](https://github.com/benelliott/pre-build-webpack), which provides a hook before the start of the build.

## Installation

```
npm install --save-dev webpack-pre-emit-plugin
```

## Usage

In config file:

``` javascript
var WebpackPreEmitPlugin = require('webpack-pre-emit-plugin');

// ...
  module: {
    plugins: [
      new WebpackPreEmitPlugin(function(stats, callback) {
        // Do whatever you want before build starts...
        callback(); // when done
      }),
    ]
  },
// ...
```

