/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/console.html
 * JSGtk Status         incomplete
 */

const
  GFormat = imports.format,
  RESET = '\x1b[0m',
  RED = '\x1b[0;31m',
  GREEN = '\x1b[0;32m',
  YELLOW = '\x1b[0;33m',
  BOLD = '\x1b[1m',
  show = (fn, pre, args, post) => {
    fn(pre + (
      /%[sdxf]/.test(args[0]) ?
        GFormat.vprintf(args[0], args.slice(1)) :
        args.join(', ')
    ) + post);
  }
;

function slice() {
  for (var
    o = +this,
    i = o,
    l = arguments.length,
    n = l - o,
    a = Array(n < 0 ? 0 : n);
    i < l; i++
  ) a[i - o] = arguments[i];
  return a;
}

module.exports = {
  assert: function assert(what, why) {
    if (!what) {
      imports.jsUnit.error(RED + BOLD + '[WRONG]' + RESET + ' ' + RED + BOLD + (why || '') + RESET);
    }
  },
  error: function error(what, why) {
    show(
      printerr,
      RED + BOLD + '[ERROR]' + RESET + ' ' + RED,
      slice.apply(0, arguments),
      RESET
    );
  },
  info: function info(what, why) {
    show(
      print,
      GREEN + BOLD + '[INFO]' + RESET + ' ' + BOLD,
      slice.apply(0, arguments),
      RESET
    );
  },
  log: function log(what, why) {
    show(
      print,
      '',
      slice.apply(0, arguments),
      ''
    );
  },
  warn: function warn(what, why) {
    show(
      print,
      YELLOW + BOLD + '[WARNING]' + RESET + ' ' + YELLOW,
      slice.apply(0, arguments),
      RESET
    );
  }
};