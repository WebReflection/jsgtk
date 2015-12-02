(function (exports) {'use strict';

  exports.global = Function('return this')();
  exports.global.global = exports.global;

  exports.global.System = exports;

}(this));