/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports, Array, Object) {'use strict';

  const

    GLib = imports.gi.GLib,

    create = Object.create,
    dP = Object.defineProperty,
    gOPD = Object.getOwnPropertyDescriptor,
    gOPNs = Object.getOwnPropertyNames,
    hOP = Object.prototype.hasOwnProperty,
    trim = String.prototype.trim
  ;

  function inherits(Constructor, Super) {
    Constructor.super_ = Super;
    Constructor.prototype = create(Super.prototype, {
      constructor: {
        configurable: true,
        enumerable: false,
        writable: true,
        value: Constructor
      }
    });
  }

  // minimalistic utility to create classes
  // Class(Parent, {proto})
  // Class({proto})
  exports.Class = function Class(parent, proto) {
    let length = arguments.length;
    if (length === 1) proto = parent;
    if (!hOP.call(proto, 'constructor'))
      proto.constructor = function Class() {};
    if (length > 1) inherits(proto.constructor, parent);
    return gOPNs(proto).reduce(
      (p, key) => {
        let d = gOPD(proto, key);
        d.enumerable = false;
        return dP(p, key, d);
      },
      proto.constructor.prototype
    ).constructor;
  };

  // same function used in util
  exports.inherits = inherits;

  // utility to slice.apply(0, arguments)
  // in a way that should be arguments leaks free
  exports.slice = function slice() {
    /* jshint validthis: true */
    for (var
      o = +this,
      i = o,
      l = arguments.length,
      n = l - o,
      a = Array(n < 0 ? 0 : n);
      i < l; i++
    ) a[i - o] = arguments[i];
    return a;
  };

  exports.system = function system(command) {
    return trim.call(GLib.spawn_command_line_sync(command)[1]);
  };

}(this, Array, Object));