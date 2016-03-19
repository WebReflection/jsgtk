/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/util.html
 * JSGtk Status         complete (without deprecated)
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports */

const

  GFormat = imports.format,

  jsgtk = process.binding('jsgtk'),

  create = Object.create,
  hOP = Object.prototype.hasOwnProperty,

  ten = (i) => ('0' + i).slice(-2)
;

module.exports = {
  deprecate: function deprecate(fn, message) {
    var shouldWarn = false;
    return function() {
      if (shouldWarn) {
        shouldWarn = !shouldWarn;
        console.warn(message);
      }
      return fn.apply(this, arguments);
    };
  },
  format: function format() {
    return GFormat.vprintf(arguments[0], jsgtk.slice.apply(1, arguments));
  },
  inherits: jsgtk.inherits,
  inspect: function inspect(what, how) {
    if (!how) how = {};
    return jsgtk.inspect(what, {
      colors: hOP.call(how, 'colors') ? how.colors : false,
      depth: hOP.call(how, 'depth') ?
        (how.depth === null ? Infinity : how.depth) : 2,
      showHidden: hOP.call(how, 'showHidden') ? !!how.showHidden : false
    });
  },
  log: function log(message) {
    var d = new Date();
    console.log([
      d.getDate(),
      ( / (\S+) /.test('' + d) && RegExp.$1),
      [
        ten(d.getHours()),
        ten(d.getMinutes()),
        ten(d.getSeconds())
      ].join(':'),
      '-',
      message
    ].join(' '));
  }
};
