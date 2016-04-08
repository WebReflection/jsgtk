/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/crypto.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports */

const
  GLib = imports.gi.GLib,
  Buffer = require('buffer').Buffer
;

module.exports = {
  randomBytes: function randomBytes(size) {
    let chars = new Buffer(size);
    while (size--) chars[size] = GLib.random_int_range(0, 255);
    return chars;
  }
};
