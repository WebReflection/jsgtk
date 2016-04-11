// see lang.js to see how different is jsgtk

const GLib = imports.gi.GLib;
const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;
Gtk.init(null);

const TimerLabel = new Lang.Class({
    Name: 'TimerLabel',
    Extends: Gtk.Label,
    Properties: {
        'timeout': GObject.ParamSpec.uint('timeout', '', '',
            GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT_ONLY,
            1, 10, 1),
        'count': GObject.ParamSpec.uint('count', '', '',
            GObject.ParamFlags.READABLE, 0, GLib.MAXUINT32, 0),
    },
    _init: function (props) {
        this.parent(props);
        this._count = 0;
        this.label = 'Hello World!';
        GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, this.timeout, () => {
            this._count++;
            this.notify('count');
            return GLib.SOURCE_CONTINUE;
        });
    },
    get count() {
        return this._count;
    },
});

let win = new Gtk.Window();
let label = new TimerLabel();
win.add(label);
win.connect('destroy', Gtk.main_quit);
label.connect('notify::count', (obj) => {
    if (obj.count === 2)
        Gtk.main_quit();
});
win.show_all();
Gtk.main();
