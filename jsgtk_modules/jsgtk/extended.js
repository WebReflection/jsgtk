/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */
/* global imports */

(function (exports) {'use strict';

  const
    PROTODECORATORS = '@\x01protodecorators',
    DECORATORS = '@\x01decorators',
    PROPERTIES = '@\x01properties',
    GLib = imports.gi.GLib,
    GObject = imports.gi.GObject,
    ParamFlags = GObject.ParamFlags,
    ParamSpec = GObject.ParamSpec,
    Lang = imports.lang,
    empty = Array.prototype,
    hOP = Object.prototype.hasOwnProperty,
    toString = Object.prototype.toString,
    dP = Object.defineProperty,
    dPs = Object.defineProperties,
    gPO = Object.getPrototypeOf,
    sPO = Object.setPrototypeOf,
    gOPDs = Object.getOwnPropertyDescriptors,
    functionKeys = Object.getOwnPropertyNames(nope),
    sObject = toString.call(Object.prototype)
  ;

  function get(obj, prop, dft) {
    return hOP.call(obj, prop) ? obj[prop] : dft;
  }

  // accepts both 'readwrite' and GObject.ParamFlags.READWRITE
  function getFlags(flags) {
    let flag;
    for (let i = 0; i < flags.length; i++) {
      let tmp = flags[i];
      flag |= typeof tmp === 'string' ?
        ParamFlags[resolveFlag(tmp)] : tmp;
    }
    return flag;
  }

  // transform shortcuts into real names
  function resolveFlag(f) {
    let F = f.toUpperCase();
    switch (F) {
      case 'C': return 'CONSTRUCT';
      case 'CO': return 'CONSTRUCT_ONLY';
      case 'D': return 'DEPRECATED';
      case 'EN': return 'EXPLICIT_NOTIFY';
      case 'LV': return 'LAX_VALIDATION';
      case 'PVT': return 'PRIVATE';
      case 'R': return 'READABLE';
      case 'RW': return 'READWRITE';
      case 'SBLURB': return 'STATIC_BLURB';
      case 'SNAME': return 'STATIC_NAME';
      case 'SNICK': return 'STATIC_NICK';
      case 'W': return 'WRITABLE';
      default: return F;
    }
  }

  // accepts both 'uint' and GObject.ParamSpec.uint
  function getType(type) {
    return typeof type === 'string' ? ParamSpec[type] : type;
  }

  function getInstanceValue(value) {
    return value && typeof value === 'object' ?
      new value.constructor() : value;
  }

  // from a value type descriptor, retireve
  // the right amount of arguments to invoke its ParamSpec
  // defaults are included
  function getTypeInitializer(value, dfts) {
    switch (value.type.toLowerCase()) {
      case 'boolean':
        return [
          (dfts.value = get(value, 'value', false))
        ];
      case 'char':
      case 'int':
        return [
          get(value, 'min', GLib.MININT32),
          get(value, 'max', GLib.MAXINT32),
          (dfts.value = get(value, 'value', 0)),
        ];
      case 'uchar':
      case 'uint':
        return [
          get(value, 'min', 0),
          get(value, 'max', GLib.MAXUINT32),
          (dfts.value = get(value, 'value', 0)),
        ];
      case 'int64':
        return [
          get(value, 'min', GLib.MININT64),
          get(value, 'max', GLib.MAXINT64),
          (dfts.value = get(value, 'value', 0)),
        ];
      case 'uint64':
        return [
          get(value, 'min', 0),
          get(value, 'max', GLib.MAXUINT64),
          (dfts.value = get(value, 'value', 0)),
        ];
      case 'enum':
      case 'flags':
        return [
          (dfts.value = get(value, 'value', 0)),
          get(value, 'class', null)
        ];
      case 'string':
        // to convert empty strings to null, null: true
        // to convert null to empty strings, null: false
        let nullStrings = ~get(value, 'null', 0);
        return [
          get(value, 'first', ''),
          get(value, 'nth', ''),
          (dfts.value = get(value, 'value', '')),
          2 + nullStrings,
          ~nullStrings
        ];
      case 'param':
      case 'boxed':
      case 'object':
      case 'pointer':
        return empty;
      case 'unichar':
        return [
          get(value, 'value', '')
        ];
      case 'override':
        return [
          get(value, 'overridden', null)
        ];
      case 'valuearray':
      case 'variant':
        return [
          (dfts.value = get(value, 'spec', get(value, 'value', []))),
          get(value, 'length', 0)
        ];
      case 'gtype': /* falls through */
      case 'double': /* falls through */
      case 'float': /* falls through */
      case 'long': /* falls through */
      case 'ulong': /* falls through */
      default:
        throw new Error(
          'unable to define this kind of parameter: ' +
          value.type
        );
    }
  }

  function createProperties(props, dfts) {
    const properties = {};
    Object.keys(props).forEach(key => {
      let value = props[key];
      // parse only objects, opt out using GObject directly
      if (toString.call(value) === sObject) {
        dfts[key] = {};
        properties[key] = getType(value.type).apply(null, [
          key,
          '',
          '',
          (dfts[key].flags = getFlags(
            empty.concat(value.flags || 'readwrite')
          ))
        ].concat(
          getTypeInitializer(value, dfts[key])
        ));
      } else {
        properties[key] = value;
      }
    });
    return properties;
  }

  function metaClass(p) {
    return  typeof p === 'function' &&
            p.prototype &&
            p.prototype.__metaclass__;
  }

  function nope() {}

  exports.GObjectProperties = function (properties) {
    return function classDecorator(Class) {
      const dfts = {};
      const protoDescriptors = {};
      Class[PROPERTIES] = Object.assign(
        Class[PROPERTIES] || {},
        createProperties(properties, dfts)
      );
      Class[DECORATORS] = (Class[DECORATORS] || empty).concat(function () {
        dPs(this, dfts);
      });
      Class[PROTODECORATORS] = (Class[PROTODECORATORS] || empty).concat(function () {
        dPs(this, protoDescriptors);
      });
      Object.keys(dfts).forEach(key => {
        const
          guard = (who) => {
            if (who instanceof Class)
              throw new Error(key + ' should not be directly accessed');
            return true;
          },
          info = dfts[key],
          flags = info.flags,
          value = info.value,
          enumreable = !(flags & ParamFlags.PRIVATE),
          ukey = '_' + key,
          get = function () {
            return (enumreable || guard(this)) && this[ukey];
          },
          set = function (value) {
            if (enumreable || guard(this))
              this[ukey] = value;
          }
        ;
        delete dfts[key];
        switch (true) {
          case !!(flags & ParamFlags.READABLE) && !(flags & ParamFlags.WRITABLE):
            protoDescriptors[key] = {get: get};
            dfts[ukey] = {
              writable: true,
              get value() {
                return getInstanceValue(value);
              }
            };
            break;
          case !!(flags & ParamFlags.WRITABLE) && !(flags & ParamFlags.READABLE):
            protoDescriptors[key] = {set: set};
            dfts[ukey] = {
              writable: true,
              get value() {
                return getInstanceValue(value);
              }
            };
            break;
          case !!(flags & ParamFlags.READWRITE):
            if (!enumreable) (protoDescriptors[key] = {
              get: get,
              set: set
            });
            dfts[enumreable ? key : ukey] = {
              enumreable: enumreable,
              writable: !(flags & ParamFlags.CONSTRUCT_ONLY),
              get value() {
                return getInstanceValue(value);
              }
            };
            break;
        }
      });
      return Class;
    };
  };

  exports.superProto = function (Class) {
    return metaClass(Class) ? nope : gPO(Class);
  };

  exports.Class = function (Class) {
    let Parent = gPO(Class);
    // Gtk Classes have funny things attached to their prototype
    // when a Class is native one, use the lang.Class instead
    if (metaClass(Parent)) {
      let
        staticDescriptors = gOPDs(Class),
        protoDescriptors = Class.prototype
      ;
      // ignore common function descriptors
      functionKeys.forEach(key => delete staticDescriptors[key]);
      delete staticDescriptors[DECORATORS];
      if (hOP.call(Class, PROPERTIES)) {
        delete staticDescriptors[PROPERTIES];
        protoDescriptors.Properties = Class[PROPERTIES];
      }
      delete protoDescriptors.constructor;
      protoDescriptors.Extends = Parent;
      protoDescriptors.Name = Class.name || 'Anonymous';
      (Class[PROTODECORATORS] || empty).forEach(decorator => {
        decorator.call(protoDescriptors);
      });
      return dPs(
        new Lang.Class(
          dP(
            protoDescriptors,
            '_init',
            {
              configurable: true,
              value: (function ($init, decorators) {
                return decorators.length ?
                  function _init() {
                    for (let
                      i = 0;
                      i < decorators.length;
                      decorators[i++].call(this)
                    ) {}
                    $init.apply(this, arguments);
                  } :
                  $init;
              }(
                hOP.call(protoDescriptors, '_init') ?
                  protoDescriptors._init :
                  function _init() {
                    this.parent.apply(this, arguments);
                    Class.apply(this, arguments);
                  },
                Class[DECORATORS] || empty
              ))
            }
          )
        ),
        staticDescriptors
      );
    }
    return Class;
  };

}(this));
