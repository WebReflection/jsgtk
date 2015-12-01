(function (exports) {'use strict';

  exports.console = imports.gsjtk.console;

  let timers = imports.gsjtk.timers;
  exports.clearInterval = timers.clearInterval;
  exports.clearTimeout = timers.clearTimeout;
  exports.setInterval = timers.setInterval;
  exports.setTimeout = timers.setTimeout;

  exports.utils = imports.gsjtk.utils;

}(this));