/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */
/* global imports */

(function (exports) {'use strict';

  const
    Lang = imports.lang,
    dPs = Object.defineProperties,
    gPO = Object.getPrototypeOf,
    sPO = Object.setPrototypeOf,
    gOPDs = Object.getOwnPropertyDescriptors,
    functionKeys = Object.getOwnPropertyNames(nope)
  ;

  function metaClass(p) {
    return  typeof p === 'function' &&
            p.prototype &&
            p.prototype.__metaclass__;
  }
  function nope() {}

  Object.getPrototypeOf = function getPrototypeOf(o) {
    let p = gPO(o);
    return  metaClass(p) ? nope : p;
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
      delete protoDescriptors.constructor;
      protoDescriptors.Name = Class.name || 'Anonymous';
      protoDescriptors.Extends = Parent;
      return dPs(
        new Lang.Class(
          dPs(
            protoDescriptors,
            {
              _init: {
                configurable: true,
                writable: true,
                value: function _init() {
                  this.parent.apply(this, arguments);
                  Class.apply(this, arguments);
                }
              }
            }
          )
        ),
        staticDescriptors
      );
    }
    return Class;
  };

}(this));
