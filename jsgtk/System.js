(function (exports) {'use strict';

  const
    Gdk = imports.gi.Gdk,
    global = Function('return this')()
  ;

  exports.global = global;
  global.global = global;
  global.System = exports;

  global.screen = Object.defineProperties(exports, {
    width: {
      enumerable: true,
      get: () => Gdk.Screen.width()
    },
    height: {
      enumerable: true,
      get: () => Gdk.Screen.height()
    }
  });

}(this));