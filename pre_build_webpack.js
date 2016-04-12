/**
 * @module WebpackPreBuildPlugin
 */

/**
 * @constructor
 * @param {onBuildCallback} callback - will be called right after build.
 */
function WebpackPreBuildPlugin(callback) {
  this.callback = callback;
};

/**
 * @callback onBuildCallback
 * @param {object} stats - webpack stats object
 */

/**
 * @param {object} compiler
 */
WebpackPreBuildPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compile', this.callback);
};

module.exports = WebpackPreBuildPlugin;

