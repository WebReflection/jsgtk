#!/usr/bin/env jsgtk

const Gtk = require('Gtk');
const WebKit2 = require('WebKit2');

Gtk.init(null);

let view = new WebKit2.WebView();
view.loadUri('https://google.com');
let window = new Gtk.Window();
window.add(view);
window.on('destroy', Gtk.mainQuit);
window.showAll();

console.log(view.get_tls_info());

Gtk.main();