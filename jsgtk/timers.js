(function (exports) {'use strict';

  const
    Mainloop = imports.mainloop,
    global = imports.jsgtk.System.global,
    clear = () => (id) => Mainloop.source_remove(id),
    set = (repeat) =>
      (fn, ms, ...args) =>
        Mainloop.timeout_add(
          (ms * 1) || 0,
          () => (fn.apply(null, args), repeat)
        )
  ;

  global.clearInterval  = (exports.clearInterval = clear());
  global.clearTimeout   = (exports.clearTimeout = clear());
  global.setInterval    = (exports.setInterval = set(true));
  global.setTimeout     = (exports.setTimeout = set(false));

}(this));