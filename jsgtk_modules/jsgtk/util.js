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

  function colored(what, color, how) {
    return how.colors ? (color + what + RESET) : what;
  }

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

  function inspectArray(obj, tab, wm, how, d) {
    let
      out = ['['],
      t = Array(tab + 1).join('  ')
    ;
    obj.forEach((value, i) => {
      out.push('\n', t, $inspect(value, tab, wm, how, d), ',');
    });
    if (out.length > 1) {
      out.pop();
      out.push('\n', Array(tab).join('  '), ']');
    } else {
      out.push(']');
    }
    return out.join('');
  }

  function inspectBuffer(obj, tab, wm, how, d) {
    let out = ['<Buffer'];
    for (let i = 0; i < obj.length; i++)
      out.push(obj[i].toString(16));
    return out.join(' ') + '>';
  }

  function inspectObject(obj, tab, wm, how, d) {
    let
      out = ['{'],
      t = Array(tab + 1).join('  '),
      simple = /^[a-zA-Z$_]+[a-zA-Z0-9$_]*$/
    ;
    (how.showHidden ?
      Object.getOwnPropertyNames :
      Object.keys
    )(obj).forEach((key, i) => {
      out.push('\n', t,
        simple.test(key) ?
          key : colored(JSON.stringify(key), GREEN, how),
        ': ',
        $inspect(obj[key], tab, wm, how, d),
      ',');
    });
    if (out.length > 1) {
      out.pop();
      out.push('\n', Array(tab).join('  '), '}');
    } else {
      out.push('}');
    }
    return out.join('');
  }

  function $inspect(obj, tab, wm, how, d) {
    switch (typeof obj) {
      case 'boolean':
      case 'number':
        return colored(String(obj), YELLOW, how);
      case 'function':
        return -1 < wm.indexOf(obj) ?
          colored('[Circular]', CYAN, how) :
          (wm.push(obj), colored(
            '[Function' + (
              obj.name ? (': ' + obj.name) : ''
            ) + ']', CYAN, how
          ));
      case 'object':
        return obj ? (
          -1 < wm.indexOf(obj) ?
            colored('[Circular]', CYAN, how) :
            (wm.push(obj),
              (d <= how.depth ?
                (Array.isArray(obj) ? inspectArray :
                  (obj instanceof Uint8Array ? inspectBuffer : inspectObject))
                (obj, tab + 1, wm, how, d + 1) :
                (Array.isArray(obj) ?
                  colored('[Array]', CYAN, how) :
                  colored('[Object]', CYAN, how))
              )
            )
        ) : 'null';
      case 'string':
        return colored(JSON.stringify(obj), GREEN, how);
      case 'symbol':
        return colored(String(obj), YELLOW, how);
      case 'undefined':
        return colored(String(obj), GREY, how);
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
  exports.inspect = function inspect(what, how) {
    return $inspect(
      what,
      0,
      [],
      how || {
        colors: false,
        depth: Infinity,
        showHidden: false
      },
      0
    );
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
