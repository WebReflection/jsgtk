(function (exports) {'use strict';

  let
    path = imports.jsgtk.path,
    Glib = imports.gi.GLib,
    cache = Object.create(null),
    dir = '.'
  ;

  // find out which path is currently running jsgtk
  (new Error()).stack.split('\n').some(function (line) {
    let important = line.indexOf('require.js') < 0;
    if (important) dir = path.dirname(line.replace(/^@/, ''));
    return important;
  });

  exports.require = function require(id) {
    return requireWithPath(id, dirname);
  };

  function evaluateAndCache(id, dir) {
    let
      exports = {},
      module = {exports: exports, id: id}
    ;
    // TODO: __dirname and __filename
    Function(
      'require',
      'exports',
      'module',
      Glib.file_get_contents(id)[1]
    ).call(
      exports,
      function require(id) {
        return requireWithPath(id, dir);
      },
      exports,
      module
    );
  }

  function requireWithPath(id, dir) {

  }

}(this));