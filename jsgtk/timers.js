(function (exports) {'use strict';

  const
    Mainloop = imports.mainloop,
    createClearTimer = () => (id) => Mainloop.source_remove(id),
    createSetTimer = (repeat) =>
      (fn, ms, ...args) =>
        Mainloop.timeout_add(
          (ms * 1) || 0,
          () => (fn.apply(null, args), repeat)
        )
  ;

  global.clearInterval  = (exports.clearInterval = createClearTimer());
  global.clearTimeout   = (exports.clearTimeout = createClearTimer());
  global.setInterval    = (exports.setInterval = createSetTimer(true));
  global.setTimeout     = (exports.setTimeout = createSetTimer(false));

}(this));