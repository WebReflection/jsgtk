/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports, Function, evaluate) {'use strict';

  const

    gi = imports.gi,
    hybrid_emitter = imports.jsgtk.hybrid_emitter,

    // to debug all steps, pas --debug
    D = ARGV.some(value => value === '--debug'),
    BUG = D&&function () {
      print(Array.prototype.join.call(arguments, ' '));
    },

    CONSTANT_CASE = /^[A-Z_]+$/,
    PascalCase = /^[A-Z]+[a-z]/,
    UPPERCASE = /[A-Z]+/g,

    create = Object.create,
    getPrototypeOf = Object.getPrototypeOf,
    setPrototypeOf = Object.setPrototypeOf,

    gtk = create(null),
    init = [],
    weakWraps = new WeakMap(),

    exp = {
      has: (id) => PascalCase.test(id),
      get: (id) => getGtkModule(gi, id),
      load: function load(module) {
        return getGtkModule(gi, module);
      }
    }

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
    /* jshint ignore: start */
    return (init[l] = Function('return new this(' + a.join(',') + ')'));
    /* jshint ignore: end */
  }

  // used to create Gtk constructors instances
  // createInstance.apply(Gtk.Window, [{title: 'Gtk+'}]);
  function createInstance() {
    /* jshint validthis: true */
    const l = arguments.length;
    return (init[l] || createInit(l)).apply(this, arguments);
  }

  function createModule(parent, module) {

    if(D)BUG('CREATING', module);

    const
      child = parent[module],
      ns = create(null),
      hasChild = (target, property) => {
        return toPythonCase(property) in child;
      },
      getChild = (target, property, receiver) => {
        if(D)BUG('STATIC GET', module + '.' + property);
        switch (true) {
          case PascalCase.test(property):
            return getGtkModule(child, property);
          default:
            return wrapResult(child[toPythonCase(property)]);
        }
      },
      setChild = (target, property, value, receiver) => {
        if(D)BUG('STATIC SET', module + '.' + property, value);
        child[toPythonCase(property)] = getTheRightObject(value);
      }
    ;

    switch (true) {
      case PascalCase.test(module):
        switch (typeof child) {
          case 'function':
            // this is what happens when exported classes don't bring
            // any information whatsoever and there's no way to grab
            // all prototype methods or properties. Runtime it is then.
            const
              prototype = child.prototype,
              proxy = new Proxy(getPrototypeOf(prototype), {
                has: function has(parent, property) {
                  if(D)BUG('HAS', module + '#' + property);
                  setPrototypeOf(prototype, parent);
                  const result = toPythonCase(property) in prototype;
                  setPrototypeOf(prototype, proxy);
                  return result;
                },
                get: function get(parent, property, receiver) {
                  if(D)BUG('GET', module + '#' + property);
                  setPrototypeOf(prototype, parent);
                  const result = receiver[toPythonCase(property)];
                  setPrototypeOf(prototype, proxy);
                  return result;
                },
                set: function set(parent, property, value, receiver) {
                  if(D)BUG('SET', module + '#' + property, value);
                  setPrototypeOf(prototype, parent);
                  receiver[toPythonCase(property)] = value;
                  setPrototypeOf(prototype, proxy);
                }
              })
            ;
            // before setting the proxy
            // check if this is listener aware
            // in such case, make it a "node.js-ish" one
            if ('connect' in prototype) {
              hybrid_emitter.augment(prototype);
            }
            setPrototypeOf(prototype, proxy);
            return new Proxy(child, {
              has: hasChild,
              get: getChild,
              set: setChild,
              construct: (child, args) => {
                if(D)BUG('NEW(', child.name, giArguments(args), ')');
                return createInstance.apply(child, args);
              }
            });
          case 'object':
            return child && new Proxy(child, {
              has: hasChild,
              get: getChild,
              set: setChild
            });
          default:
            if(D)BUG('[WARNING] UNHANDLED PascalCase', property);
            return child;
        }
        break;
      default:
        if(D)BUG('[WARNING] UNHANDLED', property);
        return child;
    }
  }

  function getGtkModule(parent, module) {
    return gtk[module] || (
      gtk[module] = createModule(parent, module)
    );
  }

  // create setup objects with python_case properties
  function getTheRightObject(object) {
    return  typeof object === 'object' &&
            object &&
            toString.call(object) === '[object Object]' ?
              toPythonCaseObject(object) : object;
  }

  // debug Gtk arguments
  function giArguments(args) {
    try {
      return JSON.stringify(args);
    } catch(meh) {
      return args;
    }
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

  // handle results and wrap them once
  function wrapResult(result) {
    if (typeof result === 'function') {
      let wrap = weakWraps.get(result);
      if (!wrap) weakWraps.set(result, wrap = function () {
        const a = [];
        for (let i = 0, l = arguments.length; i < l; i++) {
          a[i] = getTheRightObject(arguments[i]);
        }
        if(D&&a.length)BUG('GTK ARGUMENTS', giArguments(a));
        return wrapResult(result.apply(this, a));
      });
      return wrap;
    }
    return result;
  }

  exports.withRuntime = function setup($evaluate) {
    if (!evaluate) evaluate = $evaluate;
    return exp;
  };

}(this, Function));
