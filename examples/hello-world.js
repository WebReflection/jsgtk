#!/usr/bin/env jsgtk

let
  argv = process.argv.slice(2),
  Gtk = require('Gtk'),
  win
;

Gtk.init(null);

win = new Gtk.Window({
  title: 'jsgtk',
  type : Gtk.WindowType.TOPLEVEL,
  windowPosition: Gtk.WindowPosition.CENTER
});

// Setting up optional Dark theme (gotta love it!)
// ./browser.js google.com --dark
if (argv.some(info => info === '--dark')) {
  let gtkSettings = Gtk.Settings.getDefault();
  gtkSettings.gtkApplicationPreferDarkTheme = true;
  gtkSettings.gtkThemeName = 'Adwaita';
} else if(argv.some(info => info === '--light')) {
  let gtkSettings = Gtk.Settings.getDefault();
  gtkSettings.gtkApplicationPreferDarkTheme = false;
  gtkSettings.gtkThemeName = 'Adwaita';
}

win.connect('show', () => {
  win.setKeepAbove(true);
  Gtk.main();
});
win.connect('destroy', Gtk.mainQuit);

win.setDefaultSize(200, 80);

win.add(new Gtk.Label({label: 'Hello jsGtk+'}));

win.showAll();