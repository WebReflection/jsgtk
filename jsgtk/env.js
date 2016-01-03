(function (exports) {'use strict';

  const
    BUILTIN = [
      'child_process',
      'console',
      'crypto',
      'events',
      'fs',
      'os',
      'path',
      'stream',
      'timers'
    ],
    Gio = imports.gi.Gio,
    GLib = imports.gi.GLib,
    jsgtk = imports.jsgtk,
    System = jsgtk.System,
    cache = Object.create(null),
    nodeGTK = {
      importNS: function (ns, version) {
        return imports.gi[ns];
      },
      startLoop: function () {
        // this should be a noop in jsgtk
      }
    }
  ;

  exports.require = function require(id) {
    return id === 'node-gtk' ? nodeGTK : requireWithPath(id, dir);
  };

  // basic utilities
  exports._ = {
    Class: function Class(proto) {

      let
        CONSTRUCTOR = 'constructor',
        EXTENDS = 'extends',
        hOP = Object.prototype.hasOwnProperty,
        hasSuper = hOP.call(proto, EXTENDS),
        parent = hasSuper ? proto[EXTENDS] : null,
        constructor
      ;

      if (!hOP.call(proto, CONSTRUCTOR)) {
        proto[CONSTRUCTOR] = hasSuper ?
          function Class() {
            parent.apply(this, arguments);
          } :
          function Class() {};
      } else if (hasSuper) {
        constructor = proto[CONSTRUCTOR];
        proto[CONSTRUCTOR] = function Class() {
          parent.apply(this, arguments);
          constructor.apply(this, arguments);
        };
      }

      if (hasSuper) {
        proto[CONSTRUCTOR].prototype = Object.create(
          parent.prototype,
          {constructor: {
            configurable: true,
            writable: true,
            value: proto[CONSTRUCTOR]
          }}
        );
      }

      Object.getOwnPropertyNames(proto).forEach((key) => {
        switch (key) {
          case CONSTRUCTOR:
          case EXTENDS: break;
          case 'static':
            Object.getOwnPropertyNames(proto[key]).forEach((k) => {
              Object.defineProperty(proto[CONSTRUCTOR], k, {
                enumerable: k.charAt(0) !== '_',
                value: proto[key][k]
              });
            });
            break;
          default:
            let descriptor = Object.getOwnPropertyDescriptor(proto, key);
            descriptor.enumerable = false;
            Object.defineProperty(proto[CONSTRUCTOR].prototype, key, descriptor);
            break;
        }
      });

      return proto[CONSTRUCTOR];

    },
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

  System.global.jsgtk = jsgtk;
  System.global.require = exports.require;
  BUILTIN.forEach((id) => jsgtk[id]);

  if (!Object.setPrototypeOf)
    Object.defineProperty(Object, 'setPrototypeOf', {
      configurable: true,
      writable: true,
      value: ((set) => (object, proto) => (set.call(object, proto), object))
        (Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set)
    });

  const
    fs = jsgtk.fs,
    path = jsgtk.path,
    dir = path.resolve('.')
  ;

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
        return id === 'node-gtk' ? nodeGTK : requireWithPath(id, dir);
      },
      exports,
      module,
      dir,
      id
    );
    return (cache[id] = module.exports);
  }

  function existsSync(file) {
    try {
      return fs.statSync(file);
    } catch(nope) {
      return false;
    }
  }

  // log(imports.seachPath);

  function requireWithPath(id, dir) {
    switch (true) {
      case -1 < BUILTIN.indexOf(id):
        return jsgtk[id];
      case id.charAt(0) === '.':
        id = path.resolve(dir, id);
      case path.isAbsolute(id):
        if (
          id.slice(-3) !== '.js' &&
          !Gio.File.new_for_path(id).query_exists(null)
        ) id += '.js';
        break;
      default:
        let
          currentDir = dir,
          subFolder = [currentDir, 'node_modules', id].join(path.sep),
          pkg, info
        ;
        while(!existsSync(subFolder)) {
          let i = currentDir.lastIndexOf(path.sep);
          if (i < 0) throw new Error('unable to load module ' + id);
          currentDir = currentDir.slice(0, i);
          subFolder = [currentDir, 'node_modules', id].join(path.sep);
        }
        pkg = [subFolder, 'package.json'].join(path.sep);
        info = JSON.parse(fs.readFileSync(pkg));
        id = path.normalize([subFolder, info.main].join(path.sep));
        break;
    }
    return cache[id] || evaluateAndCache(id, path.dirname(id));
  }

}(this));