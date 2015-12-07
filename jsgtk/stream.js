(function (exports) {'use strict';

  const
    Gio = imports.gi.Gio,
    GLib = imports.gi.GLib,
    ByteArray = imports.byteArray,
    jsgtk = imports.jsgtk,
    Class = jsgtk.env._.Class,
    EventEmitter = jsgtk.events.EventEmitter,
    InernalStream = Class({
      extends: EventEmitter,
      constructor: function Stream() {
        this.on('disconnect', () => {
          if (this._source) {
            this._source.unref();
            if (this instanceof Writable) {
              this._source.shutdown(true);
            }
          } else {
            this._channel.unref();
            if (this instanceof Writable) {
              this._channel.shutdown(true);
            }
          }
          this._channel = false;
        });
      }
    }),
    Readable = Class({
      extends: InernalStream,
      constructor: function Readable(channel) {
        this._bootstrap = true;
        this._channel = channel;
        this._watcher = GLib.io_add_watch(
          this._channel,
          GLib.PRIORITY_LOW,
          GLib.IOCondition.IN,
          (source, condition, data) => {
            this._source = source;
            if (this._bootstrap) {
              this._bootstrap = false;
              if (this.listenerCount('readable')) {
                this.emit('readable');
              } else {
                while (this.read());
              }
            } else {
              while (this.read());
            }
          }
        );
      },
      read: function read(size) {
        if (size) {
          // TODO: this is probably not going to work ...
          let buf = new ByteArray(size);
          this._source.read_line(buf, size, 0);
          return buf;
        } else {
          let [status, result] = this._source.read_line();
          // apparently it's not possible to compare ===
          // against a GTK status
          switch (true) {
            case status == GLib.IOStatus.NORMAL:
              this.emit('data', result);
              break;
            case status == GLib.IOStatus.EOF:
              this.emit('end');
              this._timeout = setTimeout(() => {
                this._source = null;
                this.emit('close', 0, null);
              }, 0);
              result = null;
              break;
            case status == GLib.IOStatus.ERROR:
              this.emit('error');
              break;
            case status == GLib.IOStatus.AGAIN:
              // Resource temporarily unavailable.
              // get out ? track it ? count ?
              result = '';
              break;
          }
          return result;
        }
      }
    }),
    Writable = Class({
      extends: InernalStream,
      constructor: function Writable(channel) {
        this._writable = false;
        this._writeBuffer = '';
        this._channel = channel;
        this._watcher = GLib.io_add_watch(
          this._channel,
          GLib.PRIORITY_LOW,
          GLib.IOCondition.OUT,
          (source, condition, data) => {
            this._source = source;
            if (!this._writable) {
              let buf = this._writeBuffer;
              this._writeBuffer = '';
              this._writable = true;
              this.write(buf);
            }
          }
        );
      },
      end: function end(chunk, encoding, callback) {
        // TODO: support all arguments?
        this._source.close();
        this.emit('finish');
      },
      write: function write(chunk, encoding, callback) {
        // TODO: support encoding, callback ?
        if (this._writable) {
          let [status, written] = this._source.write_chars(chunk, -1);
          if (status == GLib.IOStatus.NORMAL && status == this._source.flush()) {
            return true;
          } else {
            this.emit('error', status);
            return false;
          }
        } else {
          this._writeBuffer += chunk;
          return true;
        }
      }
    })
  ;

  exports.Readable = Readable;
  exports.Writable = Writable;
  (exports.Stream = function Stream(std) {
    let
      channel = GLib.IOChannel.unix_new(std),
      flags = channel.get_flags(),
      constructor
    ;
    switch (true) {
      case flags == GLib.IOFlags.IS_WRITABLE:
        constructor = Writable;
        break;
      case flags == GLib.IOFlags.IS_READABLE:
        constructor = Readable;
        break;
    }
    return new constructor(channel);
  }).prototype = InernalStream.prototype;
}(this));