/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/console.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports, print, printerr */

const
  RESET = '\x1b[0m',
  RED = '\x1b[0;31m',
  GREEN = '\x1b[0;32m',
  YELLOW = '\x1b[0;33m',
  BOLD = '\x1b[1m',
  GLib = imports.gi.GLib,
  GFormat = imports.format,
  util = process.binding('util'),
  inspect = arg => typeof arg === 'string' ?
    arg : util.inspect(arg),
  show = (fn, pre, args, post) => {
    fn(pre + (
      /%[sdxf]/.test(args[0]) ?
        GFormat.vprintf(args[0], args.slice(1)) :
        args.map(inspect).join(' ')
    ) + post);
  },
  timers = Object.create(null),
  console = {
    assert: function assert(what, why) {
      if (!what) {
        imports.jsUnit.error(
          RED + BOLD + '[WRONG]' + RESET + ' ' + RED + BOLD + (why || '') + RESET
        );
      }
    },
    error: function error(what, why) {
      show(
        printerr,
        RED + BOLD + '[ERROR]' + RESET + ' ' + RED,
        util.slice.apply(0, arguments),
        RESET
      );
    },
    info: function info(what, why) {
      show(
        print,
        GREEN + BOLD + '[INFO]' + RESET + ' ' + BOLD,
        util.slice.apply(0, arguments),
        RESET
      );
    },
    log: function log(what, why) {
      show(
        print,
        '',
        util.slice.apply(0, arguments),
        ''
      );
    },
    time: function time(name) {
      timers[name] = GLib.get_real_time();
    },
    timeEnd: function timeEnd(name) {
      let result = (GLib.get_real_time() - timers[name]) / 1000;
      delete timers[name];
      console.log(name + ': ' + result + 'ms');
    },
    warn: function warn(what, why) {
      show(
        print,
        YELLOW + BOLD + '[WARNING]' + RESET + ' ' + YELLOW,
        util.slice.apply(0, arguments),
        RESET
      );
    }
  }
;

Object.defineProperty(
  global,
  'console',
  {enumerable: true, value: console}
);

module.exports = console;
