const Gtk = require('Gtk');

class TimerLabel extends Gtk.Label {
  constructor(props) {
    super(props);
    this._count = 0;
    this.label = 'Hello World!';
    setInterval(() => {
      this._count++;
      this.emit('count');
    }, 1000);
  }
  get count() {
    return this._count;
  }
}

Gtk.init(null);

let win = new Gtk.Window();
win.add(
  new TimerLabel()
    .on('count', function () {
      if (this.count === 2)
        Gtk.mainQuit();
    })
);
win
  .on('show', Gtk.main)
  .on('destroy', Gtk.mainQuit)
  .showAll()
;
