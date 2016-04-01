/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports) {'use strict';

  let counter = 0, id = null;

  const
    mainLoop = imports.gi.GLib.MainLoop.new(null, false),
    quit = function quit() {
      id = null;
      if (counter < 1) mainLoop.quit();
    }
  ;

  exports.run = () => {
    if (!mainLoop.is_running() && 0 < counter) mainLoop.run();
  };

  exports.wait = () => {
    counter++;
  };

  exports.go = () => {
    if (--counter < 1) {
      if (id) clearTimeout(id);
      id = setTimeout(quit, 33);
    }
  };

}(this));
