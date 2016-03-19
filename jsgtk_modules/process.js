/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/process.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports, ARGV */

const

  gi = imports.gi,
  GLib = gi.GLib,
  GFile = gi.Gio.File,
  System = imports.system,

  BEGINNING = Date.now(),
  CURRENT_DIR = GLib.get_current_dir(),
  DIR_SEPARATOR = /\//.test(CURRENT_DIR) ? '/' : '\\'

;

module.exports = {
  argv: (() => {
    for (var
      evalArg = /^-e|--eval$/,
      argv = [GFile.new_for_path(System.programInvocationName).get_path()],
      i = 0; i < ARGV.length; i++
    ) {
      if (ARGV[i][0] !== '-') {
        if (!evalArg.test(ARGV[i - 1])) {
          argv = argv.concat(
            GFile.new_for_path(
              GLib.path_is_absolute(ARGV[i]) ?
                ARGV[i] : ('.' + DIR_SEPARATOR + ARGV[i])
            ).get_path(),
            ARGV.slice(i + 1)
          );
        }
        break;
      }
    }
    return argv;
  })(),
  binding: (which) => imports.jsgtk[which],
  cwd: () => CURRENT_DIR,
  env: ((arr) => {
    const env = {};
    for (let i = 0, p, info; i < arr.length; i++) {
      info = arr[i];
      p = info.indexOf('=');
      env[info.slice(0, p)] = info.slice(p + 1);
    }
    return env;
  })(GLib.get_environ()),
  exit: status => System.exit(status || 0),
  platform: ((platform) => {
    switch (true) {
      // TODO /Win|Mingw|WOW/i ???
      case /\b(?:Win|WOW)\b/i.test(platform):
        return 'win32';
      default:
        return platform.toLowerCase();
    }
  })(''.trim.call(GLib.spawn_command_line_sync('uname')[1])),
  uptime: () => (Date.now() - BEGINNING) / 1000
};
