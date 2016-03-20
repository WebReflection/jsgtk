/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

// partially populated at runtime on bootstrap

(function (exports, Object) {'use strict';

  if (!('setPrototypeOf' in Object)) {
    Object.defineProperty(
      Object,
      'setPrototypeOf',
      {
        enumerable: true,
        value: ((set) => function setPrototypeOf(target, proto) {
          set.call(target, proto);
          return target;
        })(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set)
      }
    );
  }

  if (!('getOwnPropertySymbols' in Object)) {
    Object.defineProperty(
      Object,
      'getOwnPropertySymbols',
      {
        enumerable: true,
        value: function getOwnPropertySymbols(){ return []; }
      }
    );
  }

}(this, Object));