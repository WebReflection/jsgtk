(function (exports) {'use strict';

  const
    Gtk = imports.gi.Gtk,
    jsgtk = imports.jsgtk,
    timers = jsgtk.timers
  ;

  Gtk.init(null, 0);

  exports.env = ((arr) => {
    const env = {};
    for (let i = 0; i < arr.length; i++) {
      let
        info = arr[i],
        p = info.indexOf('=')
      ;
      env[info.slice(0, p)] = info.slice(p + 1);
    }
    return env;
  })(imports.gi.GLib.get_environ());

  exports.exit = function () {
    timers.setTimeout(() => Gtk.main_quit(), 0);
  };

  exports.run = function (callback) {
    callback();
    Gtk.main();
  };

  jsgtk.System.global.process = exports;

}(this));