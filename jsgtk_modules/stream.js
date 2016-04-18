/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/stream.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports */

const

  GLib = imports.gi.GLib,
  ByteArray = imports.byteArray,

  Class = process.binding('util').Class,

  EventEmitter = require('events').EventEmitter,

  InernalStream = Class(EventEmitter, {
    constructor: function InernalStream() {
      EventEmitter.call(this);
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

  Readable = Class(InernalStream, {
    constructor: function Readable(channel) {
      InernalStream.call(this);
      this._bootstrap = true;
      this._channel = channel;
      this._watcher = GLib.io_add_watch(
        this._channel,
        GLib.PRIORITY_DEFAULT,
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
            // TODO: this is wrong.
            //       the close event should be emitted
            //       only when the pid is closed
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

  Writable = Class(InernalStream, {
    constructor: function Writable(channel) {
      InernalStream.call(this);
      this._writable = false;
      this._writeBuffer = '';
      this._channel = channel;
      this._watcher = GLib.io_add_watch(
        this._channel,
        GLib.PRIORITY_DEFAULT,
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
  }),

  Stream = Class(InernalStream, {
    constructor: function Stream(std) {
      InernalStream.call(this);
      let
        channel = GLib.IOChannel.unix_new(std),
        flags = channel.get_flags(),
        constructor
      ;
      channel.set_flags(GLib.IOFlags.NONBLOCK);
      switch (true) {
        case flags == GLib.IOFlags.IS_WRITABLE:
          constructor = Writable;
          break;
        case flags == GLib.IOFlags.IS_READABLE:
          constructor = Readable;
          break;
      }
      return new constructor(channel);
    }
  })
;

module.exports = {
  Readable: Readable,
  Writable: Writable,
  Stream: Stream
};
