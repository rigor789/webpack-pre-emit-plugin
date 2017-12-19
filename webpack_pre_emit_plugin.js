/**
 * @module WebpackPreEmitPlugin
 */

/**
 * @constructor
 * @param {preEmitCallback} callback - will be called before emit.
 */
function WebpackPreEmitPlugin(callback) {
  this.callback = callback;
}

/**
 * @callback preEmitCallback
 * @param {object} stats - webpack stats object
 * @param {function} callback - callback when async task is done
 */

/**
 * @param {object} compiler
 */
WebpackPreEmitPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', this.callback);
};

module.exports = WebpackPreEmitPlugin;

