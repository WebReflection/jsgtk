/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/buffer.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports, unescape, escape */

// TODO: the utf16le or the conversion is somehow screwed

const
  GLib = imports.gi.GLib,
  map = Array.prototype.map,
  defineProperty = Object.defineProperty,
  hOP = Object.prototype.hasOwnProperty,
  fromCharCode = String.fromCharCode,
  charCode = c => c.charCodeAt(0),
  toUTF16 = s => unescape(encodeURIComponent(s)),
  toUTF8 = s => decodeURIComponent(escape(s)),
  toBuffer = s => toUTF16(s).split('').map(charCode),
  utf16le = {
    fromString: toBuffer,
    toString: (a) => {
      const out = [];
      for(let i = 0; i < a.length; i += 2)
        out.push(a[i] | (a[i + 1] << 8));
      return fromCharCode.apply(null, out);
    }
  },
  ENCODINGS = {
    ascii: {
      map: c => c & 0x7F,
      fromString: toBuffer,
      toString: function (a) {
        return fromCharCode.apply(null, map.call(a, this.map));
      }
    },
    base64: {
      fromString: s => GLib.base64_decode(s),
      toString: a => GLib.base64_encode(a)
    },
    binary: {
      fromString: s => s.split(''),
      toString: a => fromCharCode.apply(null, a)
    },
    hex: {
      map: i => ('0' + i.toString(16)).slice(-2),
      fromString: s => {
        const out = Array(s.length / 2);
        for (let i = 0; i < s.length; i += 2)
          out[i / 2] = parseInt(s.substr(i, 2), 16);
        return out;
      },
      toString: function (a) {
        return map.call(a, this.map).join('');
      }
    },
    ucs2: utf16le,
    utf8: {
      fromString: toBuffer,
      toString: (a) => toUTF8(fromCharCode.apply(null, a))
    },
    utf16le: utf16le
  },
  target = (parent, u8a, key) => {
    switch (key) {
      case 'buffer':
      case 'constructor':
      case 'toString':
        return parent;
    }
    return u8a;
  },
  bufferProxy = {
    isExtensible: () => false,
    get: (parent, key, receiver) => {
      switch (key) {
        case 'buffer':
        case 'constructor':
        case 'toString':
          return parent[key];
      }
      return parent.buffer[key];
    },
    set: (parent, key, value, receiver) => {
      switch (key) {
        case 'buffer':
        case 'constructor':
        case 'toString':
          parent[key] = value;
      }
      parent.buffer[key] = value;
    }
  }
;

function Buffer(data, encoding) {
  let u8a;
  switch (arguments.length) {
    case 2:
      if (!Buffer.isEncoding(encoding))
        throw new TypeError('unsupported encoding ' + encoding);
      u8a = new Uint8Array(ENCODINGS[encoding].fromString(data));
      break;
    case 1:
      if (typeof data === 'string') {
        u8a = new Uint8Array(ENCODINGS.utf8.fromString(data));
      } else {
        u8a = new Uint8Array(data);
      }
      break;
    default:
      u8a = new Uint8Array();
      break;
  }
  return new Proxy(
    defineProperty(this, 'buffer', {get: () => u8a}),
    bufferProxy
  );
}

Buffer.isBuffer = function isBuffer(obj) {
  return obj instanceof Buffer;
};

Buffer.isEncoding = function isEncoding(encoding) {
  return ENCODINGS.hasOwnProperty(encoding);
};

// TODO: this ain't gonna work
Buffer.from = function from(obj) {
  return new Buffer(String(obj));
};

Object.defineProperties(
  Object.setPrototypeOf(
    Buffer.prototype,
    Uint8Array.prototype
  ),
  {
    toString: {
      configurable: true,
      writable: true,
      value: function toString(encoding) {
        if (!encoding) encoding = 'utf8';
        if (!Buffer.isEncoding(encoding))
          throw new TypeError('unsupported encoding ' + encoding);
        return ENCODINGS[encoding].toString(this.buffer);
      }
    }
  }
);

module.exports = {
  Buffer: Buffer
};
