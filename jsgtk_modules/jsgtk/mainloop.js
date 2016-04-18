/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports) {'use strict';

  let counter = 0, id = 0;

  const
    mainLoop = imports.gi.GLib.MainLoop.new(null, false),
    quit = function quit() {
      id = 0;
      if (counter < 1) mainLoop.quit();
      return false;
    },
    gjsLoop = imports.mainloop
  ;

  exports.run = () => {
    if (!mainLoop.is_running() && 0 < counter) mainLoop.run();
  };

  exports.wait = () => {
    counter++;
  };

  exports.go = () => {
    if (--counter < 1) {
      if (id) gjsLoop.source_remove(id);
      id = gjsLoop.timeout_add(33, quit);
    }
  };

}(this));
