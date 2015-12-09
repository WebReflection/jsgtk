#!/usr/bin/env gjs

(function (Gtk){'use strict';

  Gtk.init(null);
  Gtk.Settings.get_default().set_property('gtk-application-prefer-dark-theme', true);
  Gtk.Settings.get_default().gtk_theme_name = "Adwaita";

  const
    win = new Gtk.Window({
      type : Gtk.WindowType.TOPLEVEL,
      window_position: Gtk.WindowPosition.CENTER
    })
  ;

  win.set_default_size(200, 80);
  win.add(new Gtk.Label({label: 'Hello GJS!'}));
  win.connect('show', () => {
    imports.mainloop.timeout_add(1, () => win.present());
    Gtk.main();
  });
  win.connect('destroy', () => Gtk.main_quit());
  win.show_all();

}(imports.gi.Gtk));