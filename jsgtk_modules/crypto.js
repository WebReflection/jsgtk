/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/crypto.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports */

const
  GLib = imports.gi.GLib
;

module.exports = {
  randomBytes: function randomBytes(size) {
    let out = [];
    while (size--) out.push(('0' + (GLib.random_int()).toString(16)).slice(-2));
    return out.join('');
  }
};
