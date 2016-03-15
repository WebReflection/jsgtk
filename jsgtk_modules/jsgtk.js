/*! © Andrea Giammarchi @WebReflection */

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

}(this));