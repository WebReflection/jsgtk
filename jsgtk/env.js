(function (exports) {'use strict';

  const
    BUILTIN = [
      'console',
      'fs',
      'path',
      'process',
      'timers'
    ],
    GLib = imports.gi.GLib,
    jsgtk = imports.jsgtk,
    System = jsgtk.System,
    fs = jsgtk.fs,
    path = jsgtk.path,
    dir = path.resolve('.'),
    cache = Object.create(null)
  ;

  exports.require = function require(id) {
    return requireWithPath(id, dir);
  };

  // basic utilities
  exports._ = {
    slice: function slice() {
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
  };

  System.global.require = exports.require;

  BUILTIN.forEach((id) => jsgtk[id]);

  function evaluateAndCache(id, dir) {
    let
      exports = {},
      module = {exports: exports, id: id}
    ;
    cache[id] = exports;
    Function(
      'require',
      'exports',
      'module',
      '__dirname',
      '__filename',
      fs.readFileSync(id).replace(/^#![^\n\r]*/, '')
    ).call(
      exports,
      function require(id) {
        return requireWithPath(id, dir);
      },
      exports,
      module,
      dir,
      id
    );
    return (cache[id] = module.exports);
  }

  function requireWithPath(id, dir) {
    switch (true) {
      case -1 < BUILTIN.indexOf(id):
        return jsgtk[id];
      case id.charAt(0) === '.':
        id = path.resolve(dir, id);
        break;
      case path.isAbsolute(id): break;
      default:
        break;
    }
    if (id.slice(-3) !== '.js') id += '.js';
    return cache[id] || evaluateAndCache(id, path.dirname(id));
  }

}(this));