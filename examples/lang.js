const Gtk = require('Gtk');

@GObjectProperties({
  interval: {
    type: 'uint',
    value: 1000,
    flags: ['rw', 'co']
  },
  count: {
    type: 'uint',
    flags: ['r']
  }
})
class TimerLabel extends Gtk.Label {
  constructor(props) {
    super(props);
    this.label = 'Hello World!';
    setInterval(() => {
      this._count++;
      this.notify('count');
    }, this.interval);
  }
}

Gtk.init(null);

let win = new Gtk.Window();
win.add(
  new TimerLabel()
    .on('notify::count', (obj) => {
      if (obj.count === 2 && obj.interval === 1000)
        Gtk.mainQuit();   //  ^ just as example
    })
);
win
  .on('show', Gtk.main)
  .on('destroy', Gtk.mainQuit)
  .showAll()
;
