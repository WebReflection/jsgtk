/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/path.html
 * JSGtk Status         complete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports */

const

  gi = imports.gi,
  GLib = gi.GLib,
  GFile = gi.Gio.File,

  slice = process.binding('util').slice

;

function createPathObject(DIR_SEPARATOR) {
  return {
    basename: function basename(path, suffix) {
      let len, file = GLib.path_get_basename(path);
      if (arguments.length === 2) {
        len = suffix.length;
        if (file.slice(-len) === suffix) {
          file = file.slice(0, -len);
        }
      }
      return file;
    },
    delimiter: DIR_SEPARATOR === '/' ? ':' : ';',
    dirname: dirname,
    extname: extname,
    format: function format(pathObject) {
      return [pathObject.dir, pathObject.base].join(DIR_SEPARATOR);
    },
    isAbsolute: isAbsolute,
    join: function join() {
      return GLib.build_pathv(DIR_SEPARATOR, slice.apply(0, arguments));
    },
    normalize: function normalize(path) {
      return GFile.new_for_path(path).get_path();
    },
    parse: function parse(pathString) {
      let
        dir = dirname(pathString),
        base = GLib.path_get_basename(pathString),
        ext = extname(base),
        name = base.slice(0, -ext.length) || base
      ;
      return {
        root: isAbsolute(pathString) ?
          pathString.slice(
            0, pathString.indexOf(DIR_SEPARATOR) + DIR_SEPARATOR.length
          ) : '',
        dir: dir,
        base: base,
        ext: ext,
        name: name
      };
    },
    get posix() {
      return createPathObject('/');
    },
    relative: function relative(from, to) {
      let
        sfrom = GFile.new_for_path(from).get_path().split(DIR_SEPARATOR),
        sto = GFile.new_for_path(to).get_path().split(DIR_SEPARATOR),
        length = sfrom.length,
        i = 0,
        out = []
      ;
      while (i < length && sfrom[i] === sto[i]) i++;
      sto = sto.slice(i);
      while (i++ < length) out.push('..');
      return out.concat(sto).join(DIR_SEPARATOR);
    },
    resolve: function resolve() {
      let args = [process.cwd()].concat(slice.apply(0, arguments));
      let to = args.pop();
      if (args.length) {
        let from = GFile.new_for_path(args.shift());
        while (args.length) {
          from = from.resolve_relative_path(args.shift());
        }
        return from.resolve_relative_path(to).get_path();
      }
      return to;
    },
    sep: DIR_SEPARATOR,
    get win32() {
      return createPathObject('\\');
    }
  };
}

function dirname(path) {
  return GLib.path_get_dirname(path);
}

function extname(path) {
  return /\S(\.[A-Za-z0-9]+)$/.test(path) ? RegExp.$1 : '';
}

function isAbsolute(path) {
  return GLib.path_is_absolute(path);
}

module.exports = createPathObject(
  /\//.test(process.cwd()) ? '/' : '\\'
);
