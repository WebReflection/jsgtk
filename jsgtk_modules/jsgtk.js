/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports) {'use strict';

  const
    inherits = require('util').inherits
  ;

  // minimalistic utility to create classes
  // Class(Parent, {proto})
  // Class({proto})
  exports.Class = function Class(parent, proto) {
    let length = arguments.length;
    if (length === 1) proto = parent;
    if (!proto.hasOwnProperty('constructor'))
      proto.constructor = function Class() {};
    if (length > 1) inherits(proto.constructor, parent);
    return Object.getOwnPropertyNames(proto).reduce(
      (p, key) => {
        let d = Object.getOwnPropertyDescriptor(proto, key);
        d.enumerable = false;
        return Object.defineProperty(p, key, d);
      },
      proto.constructor.prototype
    ).constructor;
  };


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

}(this));