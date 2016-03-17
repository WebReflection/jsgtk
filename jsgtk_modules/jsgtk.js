/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports, Array, Object) {'use strict';

  const

    RESET = '\x1b[0m',
    RED = '\x1b[0;31m',
    GREEN = '\x1b[0;32m',
    YELLOW = '\x1b[0;33m',
    BLUE = '\x1b[0;34m',
    MAGENTA = '\x1b[0;35m',
    CYAN = '\x1b[0;36m',
    GREY = '\x1b[0;90m',
    BOLD = '\x1b[1m',

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

  function inspectArray(obj, tab, wm) {
    let
      out = ['['],
      t = Array(tab + 1).join('  ')
    ;
    obj.forEach((value, i) => {
      out.push(i ? ('\n' + t) : ' ', $inspect(value, tab, wm), ',');
    });
    out.pop();
    out.push(' ]');
    return out.join('');
  }

  function inspectObject(obj, tab, wm) {
    let
      out = ['{'],
      t = Array(tab + 1).join('  ')
    ;
    Object.keys(obj).forEach((key, i) => {
      out.push(i ? ('\n' + t) : ' ', key, ': ', $inspect(obj[key], tab, wm), ',');
    });
    out.pop();
    out.push(' }');
    return out.join('');
  }

  function $inspect(obj, tab, wm) {
    switch (typeof obj) {
      case 'boolean':
      case 'number':
        return YELLOW + String(obj) + RESET;
      case 'function':
        if (wm.has(obj)) {
          return CYAN + '[Circular]' + RESET;
        } else {
          wm.set(obj, true);
          return CYAN +
            '[Function' + (obj.name ? (': ' + obj.name) : '') + ']' +
          RESET;
        }
      case 'object':
        if (obj) {
          if (wm.has(obj)) {
            return CYAN + '[Circular]' + RESET;
          } else {
            wm.set(obj, true);
            return Array.isArray(obj) ?
              inspectArray(obj, tab + 1, wm) :
              inspectObject(obj, tab + 1, wm);
          }
        } else {
          return 'null';
        }
      case 'string':
        return GREEN + JSON.stringify(obj) + RESET;
      case 'symbol':
        return YELLOW + String(obj) + RESET;
      case 'undefined':
        return GREY + String(obj) + RESET;
    }
    return 'unknown';
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

  // same function used in util
  exports.inspect = function inspect(obj) {
    return $inspect(obj, 0, new WeakMap());
  };

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
