/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports) {'use strict';

  let counter = 0, id = 0;

  const
    mainLoop = imports.gi.GLib.MainLoop.new(null, false),
    gjsLoop = imports.mainloop,
    quit = function quit() {
      id = 0;
      if (counter < 1) mainLoop.quit();
      return false;
    },

    // exported methods
    wait = () => {
      counter++;
    },
    go = () => {
      if (--counter < 1) {
        if (id) gjsLoop.source_remove(id);
        id = gjsLoop.timeout_add(33, quit);
      }
    },
    idle = (fn, ...args) => {
      wait();
      gjsLoop.idle_add(() => {
        go();
        fn.apply(null, args);
      });
    },
    run = () => {
      if (!mainLoop.is_running() && 0 < counter) mainLoop.run();
    }
  ;

  exports.go    = go;
  exports.idle  = idle;
  exports.run   = run;
  exports.wait  = wait;

}(this));
