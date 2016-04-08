/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: implied */

// inline polyfills for Object
[
  function assign() {
    function isEnumerable(key) {
      return Object.getOwnPropertyDescriptor(this, key).enumerable;
    }
    return {
      configurable: true,
      writable: true,
      value: function assign(target, ...sources) {
        for (var
          source,
          add = function (key) {
            target[key] = source[key];
          },
          i = 0; i < sources.length; i++
        ) {
          source = sources[i];
          Object.keys(source).forEach(add);
          Object.getOwnPropertySymbols(source)
            .filter(isEnumerable, source)
            .forEach(add);
        }
        return target;
      }
    };
  },
  function setPrototypeOf() {
    var set = Object.getOwnPropertyDescriptor(
      Object.prototype,
      '__proto__'
    ).set;
    return {
      configurable: true,
      writable: true,
      value: function setPrototypeOf(target, proto) {
        set.call(target, proto);
        return target;
      }
    };
  },
  function getOwnPropertyDescriptors() {
    var
      defineProperty = Object.defineProperty,
      gOPD = Object.getOwnPropertyDescriptor,
      gOPN = Object.getOwnPropertyNames,
      gOPS = Object.getOwnPropertySymbols,
      ownKeys = gOPS ?
        function (target) {
          return gOPN(target).concat(gOPS(target));
        } :
        gOPN
    ;
    return {
      configurable: true,
      writable: true,
      value: function getOwnPropertyDescriptors(target) {
        return ownKeys(target).reduce(
          function (descriptors, name) {
            var descriptor = gOPD(target, name);
            if (name in descriptors) {
              return defineProperty(
                descriptors,
                name,
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  value: descriptor
                }
              );
            } else {
              descriptors[name] = descriptor;
              return descriptors;
            }
          },
          {}
        );
      }
    };
  },
  function getOwnPropertySymbols() {
    return {
      configurable: true,
      writable: true,
      value: function getOwnPropertySymbols(target) {
        return [];
      }
    };
  }
].forEach(
  function poly(fill) {
    if (fill.name in this) return;
    var descriptor = fill(this);
    if (descriptor)
      Object.defineProperty(this, fill.name, descriptor);
  },
  Object
);