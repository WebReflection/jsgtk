/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true */

(function (exports, evaluate) {'use strict';

  const

    GFile = imports.gi.Gio.File,

    constants = imports.jsgtk.constants,

    core = [
      'buffer',
      'child_process',
      'console',
      'crypto',
      'events',
      'fs',
      'os',
      'path',
      'process',
      'punycode',
      'querystring',
      'stream',
      'timers',
      'url',
      'util'
    ].reduce(
      (core, id) => Object.defineProperty(core, id, {
        configurable: true,
        get: () => {
          delete core[id];
          return load(id);
        }
      }),
      Object.create(null)
    ),

    exp = {
      has: (id) => id in core,
      get: (id) => core[id],
      load: load
    }

  ;

  function load(id) {
    let fd = GFile.new_for_path([
      constants.PROGRAM_DIR,
      'jsgtk_modules',
      id + '.js'
    ].join(constants.DIR_SEPARATOR));
    return evaluate(false, core, id, fd.get_path(), fd);
  }

  exports.withRuntime = function setup($evaluate) {
    if (!evaluate) evaluate = $evaluate;
    return exp;
  };

}(this));
