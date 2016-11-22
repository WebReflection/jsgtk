#!/usr/bin/env jsgtk

;(function (Gtk, WebKit2) {'use strict';
  Gtk.init(null);
  const
    argv = ARGV,
    window = new Gtk.Window({
      title: 'GJS browser',
      type : Gtk.WindowType.TOPLEVEL,
      decorated: false,
      window_position: Gtk.WindowPosition.CENTER
    }),
    webView = new WebKit2.WebView(),
    wvSettings = webView.get_settings(),
    scrollWindow = new Gtk.ScrolledWindow({}),
    vbox = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL}),
    gtkSettings = Gtk.Settings.get_default();
  ;

  gtkSettings.gtk_application_prefer_dark_theme = true;
  gtkSettings.gtk_theme_name = 'Adwaita';

  [
    'enable_webgl',
    'enable_webaudio',
    'enable_accelerated_compositing'
  ].forEach(function (key) {
    wvSettings[key] = true;
  });

  webView.load_uri(url(argv.filter(url => '-' !== url[0])[0] || 'google.com'));
  scrollWindow.add(webView);
  vbox.pack_start(scrollWindow, true, true, 0);
  window.set_default_size(1024, 720);
  window.set_resizable(true);
  window.connect('show', () => {
    //window.fullscreen();
    Gtk.main()
  });
  window.connect('destroy', () => Gtk.main_quit());
  window.connect('delete_event', () => false);
  window.add(vbox);
  window.show_all();
  function url(href) {
    return /^([a-z]{2,}):/.test(href) ? href : ('http://' + href);
  }
}(
  imports.gi.Gtk,
  imports.gi.WebKit2
));