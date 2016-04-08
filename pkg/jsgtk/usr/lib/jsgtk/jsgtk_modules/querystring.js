/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/querystring.html
 * JSGtk Status         complete
 */

/* jshint esversion: 6, strict: implied, node: true, eqnull: true */
/* global imports */

const

  // gjs helpers and dependencies
  GLib = imports.gi.GLib,

  // module shortcuts
  defineProperty = Object.defineProperty,
  hOP = Object.prototype.hasOwnProperty,
  isArray = Array.isArray,

  // module.exports
  querystring = {
    ALLOW_UTF8: false,
    escape: function escape(str) {
      return GLib.uri_escape_string(str, null, querystring.ALLOW_UTF8);
    },
    parse: function parse(str, sep, eq, options) {
      if (typeof str !== 'string' || str.length < 1) return {};
      if (sep == null) sep = '&';
      if (eq == null) eq = '=';
      if (options == null) options = {};
      if (!hOP.call(options, 'decodeURIComponent'))
        options.decodeURIComponent = querystring.unescape;
      if (!hOP.call(options, 'maxKeys'))
        options.maxKeys = 1000;
      return parseString(str, sep, eq, options);
    },
    stringify: function stringify(obj, sep, eq, options) {
      if (typeof obj !== 'object') return '';
      if (sep == null) sep = '&';
      if (eq == null) eq = '=';
      if (options == null) options = {};
      if (!hOP.call(options, 'encodeURIComponent'))
        options.encodeURIComponent = querystring.escape;
      if (!hOP.call(options, 'maxKeys'))
        options.maxKeys = 1000;
      return parseObject(obj, sep, eq, options);
    },
    unescape: function unescape(str) {
      return GLib.uri_unescape_string(str, null);
    }
  }
;

function append(out, key, value, options) {
  key = options.decodeURIComponent(key);
  value = value.length ? options.decodeURIComponent(value) : value;
  if (key in out) {
    if (hOP.call(out, key))
      out[key] = [].concat(out[key], value);
    else defineProperty(out, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: value
    });
  } else
    out[key] = value;
}

function isValid(value) {
  switch (typeof value) {
    case 'boolean':
    case 'number':
    case 'string':
      return true;
  }
  return false;
}

function parseObject(obj, sep, eq, options) {
  const out = [];
  for (let key in obj) {
    if (hOP.call(obj, key)) {
      let value = obj[key];
      if (isValid(value)) {
        out.push(
          options.encodeURIComponent(key) +
          eq +
          options.encodeURIComponent(String(value))
        );
      } else if (isArray(value)) {
        let
          ekey = options.encodeURIComponent(key),
          i = 0,
          length = value.length
        ;
        while (i < length) {
          let evalue = value[i++];
          out.push(
            ekey +
            eq +
            (isValid(evalue) ?
              options.encodeURIComponent(String(evalue)) : '')
          );
        }
      }
    }
  }
  return out.join(sep);
}

function parseString(str, sep, eq, options) {
  const out = {};
  for (var
    index, pair,
    pairs = str.split(sep),
    leq = eq.length,
    i = 0,
    length = pairs.length; i < length; i++
  ) {
    pair = pairs[i];
    index = pair.indexOf(eq);
    if (-1 < index) {
      append(out, pair.slice(0, index), pair.slice(index + leq), options);
    } else {
      append(out, pair, '', options);
    }
  }
  return out;
}

module.exports = querystring;
