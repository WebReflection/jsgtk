(function (exports) {'use strict';

  const GLib = imports.gi.GLib;

  let
    stack = (new Error).stack,
    dir = '.',
    manysepsFind,
    manysepsReplace
  ;

  exports.sep = /jsgtk(\W+)path.js/.test(stack) && RegExp.$1;
  exports.delimiter = exports.sep === '/' ? ':' : ';';

  if (exports.sep === '/') {
    manysepsFind = /\/{2,}/g;
    manysepsReplace = exports.sep;
  } else {
    manysepsFind = /\\{3,}/g;
    manysepsReplace = exports.sep + exports.sep;
  }

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

  exports.dirname = function dirname(path) {
    return GLib.path_get_dirname(path);
  };

  exports.extname = function extname(path) {
    return /.(\.[A-Za-z]+)$/.test(path) ? RegExp.$1 : '';
  };

  exports.isAbsolute = function isAbsolute(path) {
    return GLib.path_is_absolute(path);
  };

  exports.join = function join() {
    let
      normalized = [],
      i = 0,
      tmp
    ;
    while (i < arguments.length) {
      tmp = arguments[i++];
      switch(tmp) {
        case '..':  normalized.pop();
        case '.':   break;
        default:    normalized.push(tmp);
      }
    }
    return clean(normalized.join(exports.sep));
  };

  exports.normalize = function normalize(path) {
    return exports.join.apply(exports, path.split(exports.sep));
  };

  exports.resolve = function () {
    let resolved = [], out;
    for (let i = 0, tmp; i < arguments.length; i++) {
      tmp = arguments[i];
      if (exports.isAbsolute(tmp)) {
        resolved = [tmp];
      } else {
        resolved.push(tmp);
      }
    }
    out = exports.normalize(clean(resolved.join(exports.sep)));
    if (!exports.isAbsolute(out)) {
      out = out.length ? (dir + exports.sep + out) : dir;
    }
    return out;
  };

  // find out which path is currently running jsgtk
  stack.split('\n').some(function (line) {
    let important = -1 < line.indexOf('path.js');
    if (important) dir = exports.resolve(
      exports.dirname(line.replace(/^@/, '')),
      '..'
    );
    return important;
  });

  function clean(path) {
    return path.replace(manysepsFind, manysepsReplace);
  }

  /*
  path.format(pathObject)
  path.parse(pathString)
  path.posix
  path.relative(from, to)
  path.win32
  */

}(this));