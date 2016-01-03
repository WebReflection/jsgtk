#!/usr/bin/env jsgtk

var
  GNode = require('node-gtk'),
  Gtk = GNode.importNS('Gtk'),
  win
;

GNode.startLoop();
Gtk.init(null);

win = new Gtk.Window({
  title: 'jsgtk',
  window_position: Gtk.WindowPosition.CENTER
});

win.connect('show', Gtk.main);
win.connect('destroy', Gtk.main_quit);

win.set_default_size(200, 80);
win.add(new Gtk.Label({label: 'Hello Gtk+'}));

win.show_all();