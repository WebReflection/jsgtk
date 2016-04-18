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
  ChecksumType = GLib.ChecksumType,
  Class = process.binding('util').Class,
  buffer = require('buffer'),
  Buffer = buffer.Buffer,
  ENCODINGS = buffer.ENCODINGS,
  hashTypes = Object.keys(ChecksumType),
  getHashType = (type) => {
    for (let
      TYPE = type.toUpperCase(),
      i = 0; i < hashTypes.length; i++
    ) {
      if (hashTypes[i] === TYPE) return ChecksumType[TYPE];
    }
    throw new TypeError('Unknown type ' + type);
  },
  Hash = Class({
    constructor: function Hash(type) {
      this.type = type;
    },
    digest: function digest(type) {
      return GLib.compute_checksum_for_data(
        this.type,
        this.data.toString('utf8'),
        GLib.checksum_type_get_length(this.type)
      );
    },
    update: function update(data, encoding) {
      this.data = new Buffer(data, encoding || 'utf8');
    }
  })
;

module.exports = {
  createHash: function createHash(type) {
    return new Hash(getHashType(type));
  },
  getHashes: function getCiphers() {
    return hashTypes.map(
        type => (type === 'MD5' ? 'DSA' : ('DSA-' + type))
      ).concat(
        hashTypes.map(type => 'RSA-' + type)
      );
  },
  randomBytes: function randomBytes(size) {
    let chars = new Buffer(size);
    while (size--) chars[size] = GLib.random_int_range(0, 255);
    return chars;
  }
};
