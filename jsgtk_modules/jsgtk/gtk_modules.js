/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports) {'use strict';

  const

    INITIALIZER = '_init',

    gi = imports.gi,
    hybrid_emitter = imports.jsgtk.hybrid_emitter,
    GIRepository = gi.GIRepository,
    repository = GIRepository.Repository.get_default(),
    FunctionInfoFlags = gi.GIRepository.FunctionInfoFlags,
    /*
      FunctionInfoFlags.IS_CONSTRUCTOR
      FunctionInfoFlags.IS_GETTER
      FunctionInfoFlags.IS_SETTER
      FunctionInfoFlags.IS_METHOD
      FunctionInfoFlags.THROWS
      FunctionInfoFlags.WRAPS_VFUNC
    */

    InfoType = GIRepository.InfoType,
    /*
      InfoType.INVALID
      InfoType.FUNCTION
      InfoType.CALLBACK
      InfoType.STRUCT
      InfoType.BOXED
      InfoType.ENUM
      InfoType.FLAGS
      InfoType.OBJECT
      InfoType.INTERFACE
      InfoType.CONSTANT
      InfoType.INVALID_0
      InfoType.UNION
      InfoType.VALUE
      InfoType.SIGNAL
      InfoType.VFUNC
      InfoType.PROPERTY
      InfoType.FIELD
      InfoType.ARG
      InfoType.TYPE
      InfoType.UNRESOLVED
    */

    // Object shortcuts
    defineProperty = Object.defineProperty,
    getPrototypeOf = Object.getPrototypeOf,
    gOPD = Object.getOwnPropertyDescriptor,
    hOP = Object.prototype.hasOwnProperty,
    OP = Object.prototype,

    // common RegExp
    _az = /[_-]([a-z])/g,
    aZ = /([a-z])([A-Z]+)/g,
    python_case = /[a-z][_-][a-z]/,

    // utilities
    isPlainObject = obj => obj && typeof obj === 'object' && (getPrototypeOf(obj) === OP),
    camel = s => s[0] + s.slice(1).replace(_az, ($0, $1) => $1.toUpperCase()),
    uncamel = s => s.replace(aZ, ($0, $1, $2) => ($1 + '_' + $2.toLowerCase())),

    gtk = repository.get_loaded_namespaces().reduce(
      (gtk, id) => Object.defineProperty(gtk, id, {
        configurable: true,
        get: () => {
          delete gtk[id];
          return load(id);
        }
      }),
      Object.create(null)
    ),

    exp = {
      has: (id) => id in gtk,
      get: (id) => gtk[id],
      load: load
    }
  ;

  function camelClass(Namespace, info) {
    const Class = Namespace[info.get_name()];
    camelMethods(Class, info);
    // PROPERTIES ARE NOT LIKE JS PROPERTIES
    // camelProperties(Class, info);
  }

  function camelMethods(Class, Info) {
    const
      length = GIRepository.object_info_get_n_methods(Info),
      prototype = Class.prototype
    ;
    for (let i = 0; i < length; i++) {
      let info = GIRepository.object_info_get_method(Info, i);
      let name = info.get_name();
      if (python_case.test(name)) {
        let flag = GIRepository.function_info_get_flags(info);
        define((
          (flag & FunctionInfoFlags.IS_METHOD) &&
          !(flag & FunctionInfoFlags.IS_CONSTRUCTOR)
        ) ? prototype : Class, name);
      }
    }
    if ('connect' in prototype) {
      hybrid_emitter.augment(prototype);
    }
    if (hOP.call(prototype, INITIALIZER)) {
      let descriptor = gOPD(prototype, INITIALIZER);
      descriptor.value = wrapInitializer(descriptor.value);
      defineProperty(prototype, INITIALIZER, descriptor);
    }
  }

  function define(target, name) {
    try {
      defineProperty(target, camel(name), gOPD(target, name));
    } catch(o_O) {
      // printerr(name);
    }
  }

  function load(id) {
    const
      Namespace = gi[id],
      infos = repository.get_n_infos(id)
    ;
    for (let i = 0; i < infos; i++) {
      let info = repository.get_info(id, i);
      switch (info.get_type()) {
        case InfoType.OBJECT:
          camelClass(Namespace, info);
          break;
        case InfoType.FUNCTION:
        case InfoType.PROPERTY:
          let name = info.get_name();
          if (python_case.test(name)) {
            define(Namespace, name);
          }
          break;
      }
    }
    return (gtk[id] = Namespace);
  }

  function withoutCamelCase(obj) {
    const out = {};
    for (let key in obj)
      out[uncamel(key)] = obj[key];
    return out;
  }

  function wrapInitializer($init) {
    return function _init() {
      for (var
        tmp,
        length = arguments.length,
        args = [],
        i = 0; i < length; i++
      ) {
        tmp = arguments[i];
        args[i] = isPlainObject(tmp) ? withoutCamelCase(tmp) : tmp;
      }
      $init.apply(this, args);
    };
  }

  exports.withRuntime = function setup($evaluate) {
    return exp;
  };

}(this));
