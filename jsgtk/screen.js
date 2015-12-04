(function (exports) {'use strict';

  const
    Gdk = imports.gi.Gdk,
    global = imports.jsgtk.System.global
  ;

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

  global.screen = exports;

}(this));