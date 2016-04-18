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

  util = process.binding('util'),

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
    return GFormat.vprintf(arguments[0], util.slice.apply(1, arguments));
  },
  inherits: util.inherits,
  inspect: function inspect(what, how) {
    if (!how) how = {};
    return util.inspect(what, {
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
  },
  isDate: function isDate(date) {
    return date instanceof Date;
  },
  isRegExp: function isRegExp(re) {
    return re instanceof RegExp;
  },
  isPrimitive: function isPrimitive(value) {
    switch (typeof value) {
      case 'function':
      case 'object':
        return false;
      default:
        return true;
    }
  }
};
