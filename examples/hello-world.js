#!/usr/bin/env jsgtk

let
  argv = process.argv.slice(2),
  Gtk = require('Gtk'),
  darkTheme = (choice) => {
    let gtkSettings = Gtk.Settings.getDefault();
    gtkSettings.gtkApplicationPreferDarkTheme = choice;
    gtkSettings.gtkThemeName = 'Adwaita';
  },
  win
;

Gtk.init(null);

win = new Gtk.Window({
  title: 'jsgtk',
  type : Gtk.WindowType.TOPLEVEL,
  windowPosition: Gtk.WindowPosition.CENTER
});

if (argv.some(info => info === '--dark')) {
  darkTheme(true);
} else if(argv.some(info => info === '--light')) {
  darkTheme(false);
}

win
  .once('show', () => {
    win.setKeepAbove(true);
    setTimeout(() => {
      win.setKeepAbove(false);
      win.grabFocus(); // TODO: ignored in OSX ?
    }, 100);
    Gtk.main();
  })
  .on('destroy', Gtk.mainQuit)
  .add(new Gtk.Label({label: 'Hello jsGtk+'}))
;

win.setDefaultSize(200, 80);
win.showAll();
