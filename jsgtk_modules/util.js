/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/util.html
 * JSGtk Status         complete (without deprecated)
 */

const
  console = require('console'),
  create = Object.create,
  ten = (i) => ('0' + i).slice(-2)
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
    return GFormat.vprintf(arguments[0], slice.apply(1, arguments));
  },
  inherits: function inherits(Constructor, Super) {
    Constructor.super_ = Super;
    Constructor.prototype = create(Super.prototype, {
      constructor: {
        configurable: true,
        enumerable: false,
        writable: true,
        value: Constructor
      }
    });
  },
  log: function log(message) {
    var d = new Date;
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