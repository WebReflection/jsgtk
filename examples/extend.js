#!/usr/bin/env jsgtk

const Gtk = require("Gtk");

class Window extends Gtk.Window {
  constructor(props, extras) {
    super(props);
    if (extras) this.setup(extras);
  }
  setup(props) {
    this.add(new Gtk.Label({label: props.label || ''}));
    this
      .once('show', Gtk.main)
      .on('destroy', Gtk.mainQuit)
      .setDefaultSize(
        props.width || 200,
        props.height || 100
      )
    ;
  }
}

Gtk.init(null);
new Window(
  { // Gtk.Window setup
    type: Gtk.WindowType.TOPLEVEL,
    windowPosition: Gtk.WindowPosition.CENTER
  },
  { // extra setup, if needed
    width: 120,
    height: 60,
    label: 'hello'
  }
).showAll();
