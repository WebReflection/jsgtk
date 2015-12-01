(function (exports) {'use strict';

  const Gtk = imports.gi.Gtk;

  Gtk.init(null, 0);

  exports.run = function (callback) {
    callback();
    Gtk.main();
  };

  exports.exit = function () {
    Gtk.main_quit();
  };

}(this));