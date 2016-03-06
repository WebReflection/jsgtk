#!/usr/bin/env jsgtk

let
  Gtk = require('Gtk'),
  win
;

Gtk.init(null);

win = new Gtk.Window({
  title: 'jsgtk',
  windowPosition: Gtk.WindowPosition.CENTER
});

win.connect('show', Gtk.main);
win.connect('destroy', Gtk.mainQuit);

win.setDefaultSize(200, 80);

win.add(new Gtk.Label({label: 'Hello jsGtk+'}));

win.showAll();