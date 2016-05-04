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
  HBase = Class({
    digest: function digest(type) {
      var result = this.data.get_string();
      return type === 'hex' ?
        result :
        new Buffer(result, 'hex').toString(type);
    },
    update: function update(data, encoding) {
      this.data.update(
        (encoding ?
          new Buffer(data, encoding) :
          new Buffer(data)
        ).toString()
      );
    }
  }),
  Hash = Class(HBase, {
    constructor: function Hash(type) {
      this.data = new GLib.Checksum(type);
    }
  }),
  Hmac = Class(HBase, {
    constructor: function Hmac(type, key) {
      this.type = type;
      this.key = key;
      this.data = [];
      this.data.update = this.data.push;
    },
    digest: function digest(type) {
      var str = this.data.join('');
      return GLib.compute_hmac_for_string(
        this.type,
        this.key,
        str,
        -1
      );
    }
  })
;

module.exports = {
  createHash: function createHash(type) {
    return new Hash(getHashType(type));
  },
  createHmac: function createHmac(type, key) {
    return new Hmac(getHashType(type), key);
  },
  getHashes: function getHashes() {
    return hashTypes.map(type => type.toLowerCase());
  },
  randomBytes: function randomBytes(size) {
    let chars = new Buffer(size);
    while (size--) chars[size] = GLib.random_int_range(0, 255);
    return String.fromCharCode.apply(null, chars);
  }
};
