/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

// partially populated at runtime on bootstrap

(function (exports) {'use strict';

  exports.compare = function (a, b) {
    let
      al = a.length,
      bl = b.length,
      code = al < bl ? -1 : 1
    ;
    if (a === b) return 0;
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return code;
      }
      return 0;
    }
    return code;
  };

}(this));
