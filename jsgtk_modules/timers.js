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

  createClearTimer = () => (id) => Mainloop.source_remove(id),

  createSetTimer = (repeat) =>
    (fn, ms, ...args) =>
      Mainloop.timeout_add(
        (ms * 1) || 0,
        () => (fn.apply(null, args), repeat)
      )
;


module.exports = {
  clearInterval:  createClearTimer(),
  clearTimeout:   createClearTimer(),
  setInterval:    createSetTimer(true),
  setTimeout:     createSetTimer(false)
};
