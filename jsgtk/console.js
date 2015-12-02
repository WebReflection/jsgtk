(function (exports) {'use strict';

  const
    RESET = '\x1b[0m',
    RED = '\x1b[0;31m',
    GREEN = '\x1b[0;32m',
    YELLOW = '\x1b[0;33m',
    BOLD = '\x1b[1m',
    jsgtk = imports.jsgtk,
    slice = jsgtk.env._.slice
  ;

  exports.assert = function assert(what, why) {
    if (!what) {
      printerr(RED + BOLD + '[WRONG]' + RESET + ' ' + RED + BOLD + (why || '') + RESET);
      // TODO: how to assert and fail natively?
    }
  };

  exports.error = function error(what, why) {
    printerr(RED + BOLD + '[ERROR]' + RESET + ' ' + RED + slice.apply(0, arguments).join(', ') + RESET);
  };

  exports.info = function info(what, why) {
    print(GREEN + BOLD + '[INFO]' + RESET + ' ' + BOLD + slice.apply(0, arguments).join(', ') + RESET);
  };

  exports.log = function log(what, why) {
    print(slice.apply(0, arguments).join(', '));
  };

  exports.warn = function warn(what, why) {
    print(YELLOW + BOLD + '[WARNING]' + RESET + ' ' + YELLOW + slice.apply(0, arguments).join(', ') + RESET);
  };

  // TODO: time and timeEnd ?

  jsgtk.System.global.console = exports;

}(this));