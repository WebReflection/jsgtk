#!/usr/bin/env gjs

const require = (function () {

  const

    // to debug all steps, pas --debug
    D = ARGV.some(value => value === '--debug'),
    BUG = function () {
      print(Array.prototype.join.call(arguments, ' '));
    },

    // closure shortcuts
    GLib = imports.gi.GLib,

    // require('os')
    OS = {
      hostname: function getHostname() {},
      loadavg: function getLoadAvg() {},
      uptime: function getUptime() {},
      freemem: function getFreeMem() {},
      totalmem: function getTotalMem() {},
      cpus: function getCPUs() {},
      type: function getOSType() {},
      release: function getOSRelease() {},
      networkInterfaces: function getInterfaceAddresses() {},
      homedir: function getHomeDirectory() {},
      arch: function arch() {},
      platform: function platform() {},
      tmpdir: function tmpdir() {},
      tmpDir: function tmpDir() {},
      EOL: '\n',
      endianness: function endianness() {}
    },


    // key used to relate wrappers and Gtk objects
    SECRET = '_' + GLib.random_int(),
    TERCES = SECRET.split('').reverse().join(''),

    // commonly used RegExp
    CONSTANT_CASE = /^[A-Z_]+$/,
    PascalCase = /^[A-Z]+[a-z]/,
    UPPERCASE = /[A-Z]+/g,
    newCase = /^new(?:[A-Z_]|$)/,

    // common shortcuts
    defineProperty = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    initilaizer = [],
    toString = Object.prototype.toString,

    // the imports.gi namespace
    ns = Object.create(null)
  ;

  // the new(bind.apply(constructor,arguments)) does not work here
  // so per each amount of arguments craete a function like:
  //
  //  let instance = (function () {
  //    return new this(arguments[0]);
  //  }.apply(Constructor, arguments));
  //
  function createInit(l) {
    const a = [];
    for (let i = 0; i < l; i++) a[i] = 'arguments[' + i + ']';
    return (initilaizer[l] = Function('return new this(' + a.join(',') + ')'));
  }

  // used to create Gtk constructors instances
  // createInstance.apply(Gtk.Window, [{title: 'Gtk+'}]);
  function createInstance() {
    const l = arguments.length;
    return (initilaizer[l] || createInit(l)).apply(this, arguments);
  }

  // from a generic object, get its Gtk counterpart
  function getGtk(object) {
    return  typeof object === 'object' &&
            object &&
            hasOwnProperty.call(object, SECRET) ?
              object[SECRET] : object;
  }

  // from a generic gtk object, get its JS counterpart
  function getWrap(object) {
    return  typeof object === 'object' &&
            object &&
            hasOwnProperty.call(object, TERCES) ?
              object[TERCES] : object;
  }

  // create setup objects with python_case properties
  function getTheRightObject(object) {
    const gtk = getGtk(object);
    return gtk === object && gtk && toString.call(gtk) === '[object Object]' ?
      toPythonCaseObject(gtk) : gtk;
  }

  // create arguments compatible with Gtk
  function getGtkArguments() {
    const a = [];
    for (let i = 0, l = arguments.length; i < l; i++) {
      a[i] = getTheRightObject(arguments[i]);
    }
    D&&a.length&&BUG('GTK ARGUMENTS', giArguments(a));
    return a;
  }

  // debug Gtk arguments
  function giArguments(args) {
    try {
      return JSON.stringify(args);
    } catch(meh) {
      return args;
    }
  }

  // debug giName
  function giName(gtk) {
    const str = '' + gtk;
    return /GIName:([\S]+)/.test(str) ? RegExp.$1 : str;
  }

  // used to transform Case to _case
  function pythonCase($0) {
    return '_' + $0.toLowerCase();
  }

  // transform pcamelCase to python_case
  function toPythonCase(name) {
    return CONSTANT_CASE.test(name) ?
      name : name.replace(UPPERCASE, pythonCase);
  }

  // create new object with python_keys keys
  function toPythonCaseObject(source) {
    const target = {};
    for (let
      c, key,
      a = getOwnPropertyNames(source),
      i = 0; i < a.length; i++
    ) {
      key = a[i];
      target[toPythonCase(key)] = getTheRightObject(source[key]);
    }
    return target;
  }

  // pass wrapped arguments
  function wrapCallback(callback) {
    return function () {
      const a = [];
      for (let i = 0; i < arguments.length; i++) {
        a[i] = getWrap(arguments[i]);
      }
      return callback.apply(this, a);
    };
  }

  // handle results and wrap them
  function wrapResult(name, result) {
    return typeof result === 'function' ?
      function () {
        const a = [];
        for (let i = 0, fn; i < arguments.length; i++) {
          fn = arguments[i];
          a[i] = typeof fn === 'function' ? wrapCallback(fn) : fn;
        }
        return wrapResult(name, result.apply(
          getGtk(this),
          getGtkArguments.apply(null, a)
        ));
      } :
      getWrap(result);
  }

  // invoked once per module
  function createModule(parent, module) {

    D&&BUG('CREATING', module);

    const
      child = parent[module],
      ns = Object.create(null),
      hasChild = (target, property) => {
        return toPythonCase(property) in child;
      },
      getChild = (target, property, receiver) => {
        D&&BUG('STATIC GET', module + '.' + property);
        switch (true) {
          case PascalCase.test(property):
            return getModule(ns, child, property);
          case newCase.test(property):
            let result = wrapResult(property, child[toPythonCase(property)]);
            return typeof result === 'function' ?
              function () {
                let outcome = result.apply(this, arguments);
                return  typeof outcome === 'object' &&
                        outcome &&
                        outcome instanceof child ?
                          new target(outcome) : outcome;
              } :
              result;
          default:
            return wrapResult(property, child[toPythonCase(property)]);
        }
      },
      setChild = (target, property, value, receiver) => {
        D&&BUG('STATIC SET', module + '.' + property, value);
        child[toPythonCase(property)] = getGtk(value);
      }
    ;

    switch (true) {
      case PascalCase.test(module):
        switch (typeof child) {
          case 'function':
            let Class = function Class(gtk) {
              D&&BUG('INSTANCE', 'of', giName(gtk));
              defineProperty(this, SECRET, {value: gtk});
              defineProperty(gtk, TERCES, {value: this});
            };
            Class.prototype = new Proxy(Class.prototype, {
              has: function has(target, property) {
                D&&BUG('HAS', module + '#' + property);
                return toPythonCase(property) in child.prototype;
              },
              get: function get(target, property, receiver) {
                D&&BUG('GET', module + '#' + property);
                return wrapResult(property, receiver[SECRET][toPythonCase(property)]);
              },
              set: function set(target, property, value, receiver) {
                D&&BUG('SET', module + '#' + property, value);
                receiver[SECRET][toPythonCase(property)] = getGtk(value);
              }
            });
            return new Proxy(Class, {
              has: hasChild,
              get: getChild,
              set: setChild,
              construct: (Class, args) => {
                D&&BUG('NEW(', child.name, giArguments(args), ')');
                return new Class(createInstance.apply(
                  child,
                  getGtkArguments.apply(null, args)
                ));
              }
            });
          case 'object':
            return child && new Proxy(child, {
              has: hasChild,
              get: getChild,
              set: setChild
            });
          default:
            D&&BUG('[WARNING] UNHANDLED PascalCase', property);
            return child;
        }
      default:
        D&&BUG('[WARNING] UNHANDLED', property);
        return child;
    }
  }

  // internal namespace and module handler
  function getModule(ns, parent, module) {
    return ns[module] || (
      ns[module] = createModule(parent, module)
    );
  }

  // exported require
  return function require(module) {
    switch (true) {
      case PascalCase.test(module):
        return getModule(ns, imports.gi, module);
      case 'os':
        return OS;
      default:
        return {};
    }
  };

}());