/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/timers.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports */

const

  Mainloop = imports.mainloop,
  jsgtkLoop = process.binding('mainloop'),

  ids = new Set(),
  clearID = (id) => {
    if (ids.has(id)) {
      ids.delete(id);
      jsgtkLoop.go();
    }
  },

  createClearTimer = () => (id) => Mainloop.source_remove(id),

  createSetTimer = (repeat) =>
    (fn, ms, ...args) => {
      const id = Mainloop.timeout_add(
        (ms * 1) || 0,
        () => {
          if (!repeat) clearID(id);
          fn.apply(null, args);
          return repeat;
        }
      );
      ids.add(id);
      jsgtkLoop.wait();
      return id;
    },

  timers = {
    clearInterval:  createClearTimer(),
    clearTimeout:   createClearTimer(),
    setInterval:    createSetTimer(true),
    setTimeout:     createSetTimer(false)
  }
;

Object.defineProperties(
  global,
  {
    clearInterval: {enumerable: true, value: timers.clearInterval},
    clearTimeout: {enumerable: true, value: timers.clearTimeout},
    setInterval: {enumerable: true, value: timers.setInterval},
    setTimeout: {enumerable: true, value: timers.setTimeout}
  }
);

module.exports = timers;
