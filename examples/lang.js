// TODO:  fix imports.gi.GObject.ParamSpec.uint not being available via
//        require("GObject") and ES6 extends Gtk.Label failing
//        ( hackig the Object env upfront, simulating whatever Lang is doing )

const
  GLib = require('GLib'),
  GObject = imports.gi.GObject,
  Gtk = require('Gtk')
;

class TimerLabel extends Gtk.Label {
  constructor(props) {
    super(props);
    this._count = 0;
    this.label = 'Hello World!';
    this.timeout = GObject.ParamSpec.uint('timeout', '', '',
      GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT_ONLY,
      1, 10, 1
    );
    this.count = GObject.ParamSpec.uint('count', '', '',
      GObject.ParamFlags.READABLE, 0, GLib.MAXUINT32, 0
    );
    GLib.timeoutAddSeconds(GLib.PRIORITY_DEFAULT, this.timeout, () => {
      this._count++;
      this.notify('count');
      return GLib.SOURCE_CONTINUE;
    });
  }
  get count() {
    return this._count;
  }
}

Gtk.init(null);

let win = new Gtk.Window();
win.add(
  new TimerLabel()
    .on('notify::count', (obj) => {
      if (obj.count === 2)
        Gtk.mainQuit();
    })
);
win
  .on('show', Gtk.main)
  .on('destroy', Gtk.mainQuit)
  .showAll()
;
