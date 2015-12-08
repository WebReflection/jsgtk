#!/usr/bin/env gjs

// A basic GJS Webkit based browser example.
// Similar logic and basic interface found in this PyGTK example:
// http://www.eurion.net/python-snippets/snippet/Webkit%20Browser.html

(function (Gtk, WebKit) {'use strict';

  // necessary to initialize the graphic environment
  // if this fails it means the host cannot show GTK3
  Gtk.init(null);

  const
    // main program window
    window = new Gtk.Window({
      type : Gtk.WindowType.TOPLEVEL
    }),
    // the WebKit browser wrapper
    webView = new WebKit.WebView(),
    // toolbar with buttons
    toolbar = new Gtk.Toolbar(),
    // buttons to go back, go forward, or refresh
    button = {
      back: Gtk.ToolButton.new_from_stock(Gtk.STOCK_GO_BACK),
      forward: Gtk.ToolButton.new_from_stock(Gtk.STOCK_GO_FORWARD),
      refresh: Gtk.ToolButton.new_from_stock(Gtk.STOCK_REFRESH)
    },
    // where the URL is written and shown
    urlBar = new Gtk.Entry(),
    // the browser container, so that's scrollable
    scrollWindow = new Gtk.ScrolledWindow({}),
    // horizontal and vertical boxes
    hbox = new Gtk.HBox({}),
    vbox = new Gtk.VBox({})
  ;

  // Setting up optional Dark theme (gotta love it!)
  // ./browser.js google.com dark
  if (ARGV.some(color => color === 'dark')) {
    let gtkSettings = Gtk.Settings.get_default();
    gtkSettings.set_property('gtk-application-prefer-dark-theme', true);
    gtkSettings.gtk_theme_name = 'Adwaita';
  }

  // open first argument or Google
  webView.open(url(ARGV[0] || 'google.com'));

  // whenever a new page is loaded ...
  webView.connect('load_committed', (widget, data) => {
    // ... update the URL bar with the current adress
    urlBar.set_text(widget.get_main_frame().get_uri());
    button.back.set_sensitive(webView.can_go_back());
    button.forward.set_sensitive(webView.can_go_forward());
  });

  // configure buttons actions
  button.back.connect('clicked', () => webView.go_back());
  button.forward.connect('clicked', () => webView.go_forward());
  button.refresh.connect('clicked', () => webView.reload());

  // enrich the toolbar
  toolbar.add(button.back);
  toolbar.add(button.forward);
  toolbar.add(button.refresh);

  // define "enter" / call-to-action event
  // whenever the url changes on the bar
  urlBar.connect('activate', () => {
    let href = url(urlBar.get_text());
    urlBar.set_text(href);
    webView.open(href);
  });

  // make the container scrollable
  scrollWindow.add(webView);

  // pack horizontally toolbar and url bar
  hbox.pack_start(toolbar, false, false, 0);
  hbox.pack_start(urlBar, true, true, 8);

  // pack vertically top bar (hbox) and scrollable window
  vbox.pack_start(hbox, false, true, 0);
  vbox.add(scrollWindow);

  // configure main window
  window.set_default_size(1024, 720);
  window.set_resizable(true);
  window.connect('show', () => Gtk.main());
  window.connect('destroy', () => Gtk.main_quit());
  window.connect('delete_event', () => false);

  // add vertical ui and show them all
  window.add(vbox);
  window.show_all();

  // little helper
  // if link doesn't have a protocol, prefixes it via http://
  function url(href) {
    return /^([a-z]{2,}):/.test(href) ? href : ('http://' + href);
  }

}(
  imports.gi.Gtk,
  imports.gi.WebKit
));
