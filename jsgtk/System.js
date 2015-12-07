(function (exports) {'use strict';

  const
    Gtk = imports.gi.Gtk,
    Gdk = imports.gi.Gdk,
    path = imports.jsgtk.path,
    global = Function('return this')()
  ;

  exports.global = global;
  global.global = global;
  global.System = exports;

  // screen
  Object.defineProperty(
    global,
    'screen',
    {
      configurable: true,
      get: () => {
        Gtk.init(null, 0);
        return Object.defineProperty(global, 'screen', {
          value: {
            get width() {
              return Gdk.Screen.width();
            },
            get height() {
              return Gdk.Screen.height();
            }
          }
        }).screen;
      }
    }
  );

  // process
  global.process = {
    argv: ARGV.slice(0),
    cwd: () => path.resolve('.'),
    env: ((arr) => {
      const env = {};
      for (let i = 0; i < arr.length; i++) {
        let
          info = arr[i],
          p = info.indexOf('=')
        ;
        env[info.slice(0, p)] = info.slice(p + 1);
      }
      return env;
    })(imports.gi.GLib.get_environ()),
    exit: () => setTimeout(() => Gtk.main_quit(), 0),
    run: (callback) => {
      global.screen && callback();
      Gtk.main();
    }
  };

  // timers
  const
    Mainloop = imports.mainloop,
    createClearTimer = () => (id) => Mainloop.source_remove(id),
    createSetTimer = (repeat) =>
      (fn, ms, ...args) =>
        Mainloop.timeout_add(
          (ms * 1) || 0,
          () => (fn.apply(null, args), repeat)
        )
  ;

  global.clearInterval  = createClearTimer();
  global.clearTimeout   = createClearTimer();
  global.setInterval    = createSetTimer(true);
  global.setTimeout     = createSetTimer(false);

}(this));