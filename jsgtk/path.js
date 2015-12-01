(function (exports) {'use strict';

  let
    Gio = imports.gi.Gio,
    Glib = imports.gi.GLib
  ;

  exports.basename = function basename(path, suffix) {
    let len, file = GLib.path_get_basename(path);
    if (arguments.length === 2) {
      len = suffix.length;
      if (file.slice(-len) === suffix) {
        file = file.slice(0, -len);
      }
    }
    return file;
  };

  exports.sep = /jsgtk(\W+)path.js/.test((new Error()).stack) && RegExp.$1;

  exports.dirname = function dirname(path) {
    return Glib.path_get_dirname(path);
  };

  exports.isAbsolute = function isAbsolute(path) {
    return Glib.path_is_absolute(path);
  };

  /*
  path.delimiter
  path.extname(p)
  path.format(pathObject)
  path.join([path1][, path2][, ...])
  path.normalize(p)
  path.parse(pathString)
  path.posix
  path.relative(from, to)
  path.resolve([from ...], to)
  path.win32
  */

}(this));