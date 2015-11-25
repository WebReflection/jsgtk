const {
  assert,
  error,
  info,
  log,
  warn
} = (function () {'use strict';
  const
    RESET = '\x1b[0m',
    RED = '\x1b[0;31m',
    GREEN = '\x1b[0;32m',
    YELLOW = '\x1b[0;33m',
    BOLD = '\x1b[1m',
    slice = imports.jsgtk.utils.slice
  ;
  return {
    assert: function assert(what, why) {
      if (!what) printerr(RED + BOLD + '[WRONG]' + RESET + ' ' + RED + BOLD + (why || '') + RESET);
    },
    error: function error(what, why) {
      printerr(RED + BOLD + '[ERROR]' + RESET + ' ' + RED + slice.apply(0, arguments).join(', ') + RESET);
    },
    info: function info(what, why) {
      print(GREEN + BOLD + '[INFO]' + RESET + ' ' + BOLD + slice.apply(0, arguments).join(', ') + RESET);
    },
    log: function log(what, why) {
      print(slice.apply(0, arguments).join(', '));
    },
    warn: function warn(what, why) {
      print(YELLOW + BOLD + '[WARNING]' + RESET + ' ' + YELLOW + slice.apply(0, arguments).join(', ') + RESET);
    }
  };
}());