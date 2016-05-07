/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports) {'use strict';

  const

    INITIALIZER = '_init',

    gi = imports.gi,
    DEBUG = imports.jsgtk.constants.DEBUG,
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
    /* devug: getInfoTypeName(info) to know the name */

    // Object shortcuts
    defineProperty = Object.defineProperty,
    defineProperties = Object.defineProperties,
    getPrototypeOf = Object.getPrototypeOf,
    gOPD = Object.getOwnPropertyDescriptor,
    hOP = Object.prototype.hasOwnProperty,
    OP = Object.prototype,

    // dictionary of exceptions for replacements
    exceptions = {
      //  find    replace-with
      JavaScript: 'Javascript'
    },
    exceptionsFind = new RegExp(Object.keys(exceptions).join('|'), 'g'),
    exceptionsReplace = ($0) => exceptions[$0],

    // common RegExp
    _az = /[_-]([a-z])/g,
    aZ = /([a-z])([A-Z]+)/g,
    new_case = /^new(?:_[a-z]+)*$/,
    python_case = /^[a-z]+(?:[_-][a-z]+)+$/,
    PascalCase = /^[A-Z]+[a-zA-Z0-9_]+$/,
    // things that for some reason fail
    ignoreNameSpace = /^(?:GObject\.ParamSpec.*)$/,
    ignoreStructs = /^(?:(?:Container|Widget)Class)$/,

    // utilities
    isPlainObject = obj => obj && typeof obj === 'object' && (getPrototypeOf(obj) === OP),
    camel = s => s[0] + s.slice(1).replace(_az, ($0, $1) => $1.toUpperCase()),
    uncamel = s => s.replace(exceptionsFind, exceptionsReplace)
                    .replace(aZ, ($0, $1, $2) => ($1 + '_' + $2.toLowerCase())),

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
      has: (id) => id in gtk || PascalCase.test(id),
      get: (id) => gtk[id] || load(id),
      load: load
    },

    parSet = new Set()

  ;

  if (DEBUG) print([
    '',
    '\x1b[1mLoaded Namespaces\x1b[0m',
    repository.get_loaded_namespaces().join(', '),
    ''
  ].join('\n'));

  function augmentPrototype(Class) {
    let prototype = Class.prototype;
    if ('connect' in prototype) {
      hybrid_emitter.augment(prototype);
    }
    if (hOP.call(prototype, INITIALIZER)) {
      let descriptor = gOPD(prototype, INITIALIZER);
      descriptor.value = wrapInitializer(descriptor.value);
      defineProperty(prototype, INITIALIZER, descriptor);
    }
    return prototype;
  }

  function define(target, name) {
    let camelName = camel(name), descriptor;
    try {
      descriptor = gOPD(target, name);
      defineProperty(target, camelName, descriptor);
      return descriptor;
    } catch(o_O) {
      try {
        descriptor = {
          get: function get() { return this[name]; },
          set: function set(value) { this[name] = value; }
        };
        defineProperty(target, camelName, descriptor);
        return descriptor;
      } catch(meh) {
        // print(name);
      }
    }
    return null;
  }

  function getInfoTypeName(info) {
    let
      types = [
        'INVALID',
        'FUNCTION',
        'CALLBACK',
        'STRUCT',
        'BOXED',
        'ENUM',
        'FLAGS',
        'OBJECT',
        'INTERFACE',
        'CONSTANT',
        'INVALID_0',
        'UNION',
        'VALUE',
        'SIGNAL',
        'VFUNC',
        'PROPERTY',
        'FIELD',
        'ARG',
        'TYPE',
        'UNRESOLVED'
      ],
      type = info.get_type(),
      index = -1
    ;
    types.some((name, i) => InfoType[name] === type && ~(index = i));
    return types[index];
  }

  function getJS(ns) {
    if (ignoreNameSpace.test(ns)) return null;
    try {
      return ns.split('.').reduce((ns, name) => ns[name], gi);
    } catch(meh) {
      return null;
    }
  }

  function getArrayInfo(info, onwhat, type) {
    let plural = type + 's';
    if (plural === 'propertys') plural = 'properties';
    const
      length = GIRepository[onwhat + '_info_get_n_' + plural](info),
      out = new Array(length)
    ;
    for (let i = 0; i < length; i++)
      out[i] = GIRepository[onwhat + '_info_get_' + type](info, i);
    return out;
  }

  function getTarget(info) {
    let target = getJS(info.get_namespace() + '.' + info.get_name());
    if (parSet.has(target)) return null;
    parSet.add(target);
    return target;
  }

  function isMethod(info) {
    let flag = GIRepository.function_info_get_flags(info);
    return (
      (flag & FunctionInfoFlags.IS_METHOD) &&
      !(flag & FunctionInfoFlags.IS_CONSTRUCTOR)
    );
  }

  function isPythonName(info) {
    return python_case.test(info.get_name());
  }

  function load(id) {
    const
      Namespace = gi[id],
      infos = repository.get_n_infos(id)
    ;
    parSet.clear();
    // ignore / add modules that are known to fail
    parSet.add(gi.GObject.TypeModule);
    parSet.add(gi.Gio.IOModule);
    for (let i = 0; i < infos; i++)
      parse(repository.get_info(id, i));
    parSet.clear();
    return (gtk[id] = Namespace);
  }

  function parse(info) {
    let target;
    switch (info.get_type()) {
      case InfoType.INTERFACE:
        target = getTarget(info);
        if (target) parseInterface(target, info);
        break;
      case InfoType.OBJECT:
        target = getTarget(info);
        if (target) parseObject(target, info);
        break;
      case InfoType.STRUCT:
        target = getTarget(info);
        if (target && !ignoreStructs.test(info.get_name()))
          parseStruct(target, info);
        break;
      case InfoType.FUNCTION:
      case InfoType.PROPERTY:
        if (isPythonName(info)) {
          target = getJS(info.get_namespace());
          if (target) define(target, info.get_name());
        }
        break;
      case InfoType.UNION:
        target = getTarget(info);
        if (target) parseUnion(target, info);
        break;
    }
  }

  function parseInterface(Interface, Info) {
    const
      // properties = getArrayInfo(Info, 'interface', 'property').filter(isPythonName),
      // signals = getArrayInfo(Info, 'interface', 'signal').filter(isPythonName),
      methods = getArrayInfo(Info, 'interface', 'method').filter(isPythonName),
      prototype = augmentPrototype(Interface),
      descriptors = {},
      wrap = descriptor => {
        let value = descriptor.value;
        descriptor.value = function () {
          return defineProperties(
            value.apply(this, arguments),
            descriptors
          );
        };
        return descriptor;
      }
    ;
    if (DEBUG) print([
      'Interface: ' + Info.get_name(),
      [].concat(
        getArrayInfo(Info, 'interface', 'method').map(info => info.get_name())
      ).join(', ')
    ].join(' '));
    methods.forEach((info) => {
      let name = info.get_name();
      if (isMethod(info)) {
        let descriptor = define(prototype, name);
        if (descriptor) {
          descriptors[camel(name)] = descriptor;
        }
      } else {
        let descriptor = define(Interface, name);
        if (descriptor && new_case.test(name)) {
          defineProperty(Interface, camel(name), wrap(descriptor));
        }
      }
    });
  }

  function parseObject(Object, Info) {
    const
      // properties = getArrayInfo(Info, 'object', 'property').filter(isPythonName),
      // signals = getArrayInfo(Info, 'object', 'signal').filter(isPythonName),
      fields = getArrayInfo(Info, 'object', 'field').filter(isPythonName),
      methods = getArrayInfo(Info, 'object', 'method').filter(isPythonName),
      Parent = GIRepository.object_info_get_parent(Info),
      Interfaces = GIRepository.object_info_get_n_interfaces(Info),
      prototype = augmentPrototype(Object)
    ;
    fields.forEach((info) => {
      define(prototype, info.get_name());
    });
    methods.forEach((info) => {
      define(isMethod(info) ? prototype : Object, info.get_name());
    });
    if (DEBUG) print([
      'Object: ' + Info.get_name(),
      [].concat(
        getArrayInfo(Info, 'object', 'field').map(info => info.get_name()),
        getArrayInfo(Info, 'object', 'method').map(info => info.get_name())
      ).join(', ')
    ].join(' '));
    if (Parent) parse(Parent);
    for (let i = 0; i < Interfaces; i++)
      parse(GIRepository.object_info_get_interface(Info, i));
  }

  function parseStruct(Struct, Info) {
    const
      fields = getArrayInfo(Info, 'struct', 'field').filter(isPythonName),
      methods = getArrayInfo(Info, 'struct', 'method').filter(isPythonName),
      prototype = augmentPrototype(Struct)
    ;
    fields.forEach((info) => {
      define(prototype, info.get_name());
    });
    methods.forEach((info) => {
      define(isMethod(info) ? prototype : Struct, info.get_name());
    });
    if (DEBUG) print([
      'Struct: ' + Info.get_name(),
      [].concat(
        getArrayInfo(Info, 'struct', 'field').map(info => info.get_name()),
        getArrayInfo(Info, 'struct', 'method').map(info => info.get_name())
      ).join(', ')
    ].join(' '));
  }

  function parseUnion(Union, Info) {
    const
      fields = getArrayInfo(Info, 'union', 'field').filter(isPythonName),
      methods = getArrayInfo(Info, 'union', 'method').filter(isPythonName),
      prototype = augmentPrototype(Union)
    ;
    fields.forEach((info) => {
      define(prototype, info.get_name());
    });
    methods.forEach((info) => {
      define(isMethod(info) ? prototype : Union, info.get_name());
    });
    if (DEBUG) print([
      'Union: ' + Info.get_name(),
      [].concat(
        getArrayInfo(Info, 'union', 'field').map(info => info.get_name()),
        getArrayInfo(Info, 'union', 'method').map(info => info.get_name())
      ).join(', ')
    ].join(' '));
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

  // for those cases hard to discover
  // example: the GType GLocalFile
  defineProperty(
    gi.GObject.Object.prototype,
    '__noSuchMethod__',
    {
      configurable: true,
      value: function __noSuchMethod__(name, args) {
        name = uncamel(name);
        if (name in this)
          return this[name].apply(this, args);
        throw new TypeError(name + ' is not a function');
      }
    }
  );

  exports.withRuntime = function setup($evaluate) {
    return exp;
  };

}(this));
