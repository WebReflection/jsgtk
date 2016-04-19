/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/stream.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports, print */

const

  GLib = imports.gi.GLib,
  ByteArray = imports.byteArray,

  DEBUG = process.binding('constants').DEBUG,

  Class = process.binding('util').Class,

  EventEmitter = require('events').EventEmitter,

  createReadableWatcher = (stream) =>
    GLib.io_add_watch(
      stream._channel,
      GLib.PRIORITY_DEFAULT,
      GLib.IOCondition.IN,
      (source, condition, data) => {
        stream._source = source;
        if (stream._bootstrap) {
          stream._bootstrap = false;
          if (stream.listenerCount('readable')) {
            stream.emit('readable');
          } else {
            while (stream.read());
          }
        } else {
          while (stream.read());
        }
      }
    ),

  createWritableWatcher = (stream) =>
    GLib.io_add_watch(
      stream._channel,
      GLib.PRIORITY_DEFAULT,
      GLib.IOCondition.OUT,
      (source, condition, data) => {
        stream._source = source;
        if (!stream._writable) {
          let buf = stream._writeBuffer;
          stream._writeBuffer = '';
          stream._writable = true;
          stream.write(buf);
        }
      }
    ),

  createHangUpWatcher = (stream) =>
    GLib.io_add_watch(
      stream._channel,
      GLib.PRIORITY_DEFAULT,
      GLib.IOCondition.HUP,
      (source, condition, data) => {
        if (stream._channel) stream.emit('disconnect');
      }
    ),

  InernalStream = Class(EventEmitter, {
    constructor: function InernalStream() {
      EventEmitter.call(this);
      this.on('disconnect', () => {
        let
          channel = this._channel,
          source = this._source
        ;
        if (channel) {
          this._channel = null;
          if (source) {
            source.unref();
            if (this instanceof Writable) {
              source.shutdown(true);
              this.emit('finish');
            } else {
              this.emit('close', 0, null);
            }
          } else {
            channel.unref();
            if (this instanceof Writable) {
              channel.shutdown(true);
              this.emit('finish');
            } else {
              this.emit('close', 0, null);
            }
          }
        }
      });
    }
  }),

  Readable = Class(InernalStream, {
    constructor: function Readable(channel) {
      InernalStream.call(this);
      this._bootstrap = true;
      this._channel = channel;
      this._watcher = createReadableWatcher(this);
      this._huWatcher = createHangUpWatcher(this);
    },
    read: function read(size) {
      if (size) {
        // TODO: this is probably not going to work ...
        let buf = new ByteArray(size);
        this._source.read_line(buf, size, 0);
        return buf;
      } else {
        let [status, result] = this._source.read_line();
        // 
        // apparently it's not possible to compare ===
        // against a GTK status
        switch (true) {
          case status == GLib.IOStatus.NORMAL:
            if (DEBUG) print('Readable: NORMAL ' + result);
            this.emit('data', result);
            break;
          case status == GLib.IOStatus.EOF:
            if (DEBUG) print('Readable: EOF ' + result);
            this.emit('end');
            break;
          case status == GLib.IOStatus.ERROR:
            if (DEBUG) print('Readable: ERROR ' + result);
            this.emit('error');
            break;
          case status == GLib.IOStatus.AGAIN:
            if (DEBUG) print('Readable: AGAIN ' + result);
            this._watcher = createReadableWatcher(this);
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
      this._watcher = createWritableWatcher(this);
      this._huWatcher = createHangUpWatcher(this);
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
          if (DEBUG) print('Writable: FLUSHED ' + chunk);
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
