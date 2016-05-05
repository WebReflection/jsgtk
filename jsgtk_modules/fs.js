/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/fs.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports */

const

  gi = imports.gi,
  ByteArray = imports.byteArray,

  Gio = gi.Gio,
  GFile = Gio.File,
  GType = Gio.FileType,
  GFileMonitor = Gio.FileMonitor,
  GFileMonitorEvent = Gio.FileMonitorEvent,
  GFileMonitorFlags = Gio.FileMonitorFlags,

  EventEmitter = require('events').EventEmitter,

  mainloop = process.binding('mainloop'),
  util = process.binding('util'),
  system = util.system,

  defineProperties = Object.defineProperties,
  trim = String.prototype.trim,

  Stats = util.Class({
    constructor: function Stats(fd, info) {
      if (info) {
        this.dev        = toInt(info, Gio.FILE_ATTRIBUTE_UNIX_DEVICE);
        this.mode       = toInt(info, Gio.FILE_ATTRIBUTE_UNIX_MODE);
        this.nlink      = toInt(info, Gio.FILE_ATTRIBUTE_UNIX_NLINK);
        this.uid        = toInt(info, Gio.FILE_ATTRIBUTE_UNIX_UID);
        this.gid        = toInt(info, Gio.FILE_ATTRIBUTE_UNIX_GID);
        this.rdev       = toInt(info, Gio.FILE_ATTRIBUTE_UNIX_RDEV);
        this.blksize    = toInt(info, Gio.FILE_ATTRIBUTE_UNIX_BLOCK_SIZE);
        this.ino        = toInt(info, Gio.FILE_ATTRIBUTE_UNIX_INODE);
        this.size       = info.get_size();
        this.blocks     = toInt(info, Gio.FILE_ATTRIBUTE_UNIX_BLOCKS);
        this.atime      = toDate(info, 'FILE_ATTRIBUTE_TIME_ACCESS');
        this.mtime      = toDate(info, 'FILE_ATTRIBUTE_TIME_MODIFIED');
        this.ctime      = toDate(info, 'FILE_ATTRIBUTE_TIME_CHANGED');
        this.birthtime  = toDate(info, 'FILE_ATTRIBUTE_TIME_CREATED') ||
                          toDate(info, 'FILE_ATTRIBUTE_TIME_CHANGED');
      }
      defineProperties(this, {
        _fd: {value: fd},
        _info: {value: info}
      });
    },
    // TODO: isBlockDevice, isCharacterDevice, isFIFO, isSocket
    //       are all threated as SPECIAL files
    isFile: function isFile() {
      return this._info.get_file_type() === GType.REGULAR;
    },
    isDirectory: function isDirectory() {
      return this._info.get_file_type() === GType.DIRECTORY;
    },
    isBlockDevice: function isBlockDevice() {
      return this._info.get_file_type() === GType.SPECIAL;
    },
    isCharacterDevice: function isCharacterDevice() {
      return this._info.get_file_type() === GType.SPECIAL;
    },
    isSymbolicLink: function isSymbolicLink() {
      return this._info.get_file_type() === GType.SYMBOLIC_LINK;
    },
    isFIFO: function isFIFO() {
      return this._info.get_file_type() === GType.SPECIAL;
    },
    isSocket: function isSocket() {
      return this._info.get_file_type() === GType.SPECIAL;
    }
  }),
  FSWatcher = util.Class(EventEmitter, {
    constructor: function FSWatcher(options) {
      EventEmitter.call(this);
      this._watching = false;
      this.start(options);
    },
    start: function start(options) {
      this._watching = true;
      fs.stat(options.name, (error, stats) => {
        if (this._watching) {
          if (error) {
            this.emit('error', error);
          } else if (options.persistent) {
            const isDirectory = stats.isDirectory();
            this._monitor = GFile.new_for_path(options.name)[
              isDirectory ? 'monitor_directory' : 'monitor_file'
            ](GFileMonitorFlags.WATCH_MOVES, null);
            this._monitor.connect('changed', (monitor, fd, no_idea, event) => {
              switch (event) {
                // TODO: changed seems too greedy
                //       the "hint" seems to be more reasonable
                //       although node seems to trigger both
                // case GFileMonitorEvent.CHANGED:
                case GFileMonitorEvent.CHANGES_DONE_HINT:
                // TODO: find out if these are directory only
                case GFileMonitorEvent.DELETED:
                case GFileMonitorEvent.CREATED:
                case GFileMonitorEvent.ATTRIBUTE_CHANGED:
                case GFileMonitorEvent.UNMOUNT:
                case GFileMonitorEvent.UNMOUNTED:
                case GFileMonitorEvent.MOVED:
                case GFileMonitorEvent.MOVED_IN:
                case GFileMonitorEvent.MOVED_OUT:
                  this.emit('change', options.name, stats);
                  if (options.listener) options.listener(options.name, stats);
                  break;
                case GFileMonitorEvent.RENAMED:
                  this.emit('rename', options.name, stats);
                  if (options.listener) options.listener(options.name, stats);
                  break;
              }
            });
            mainloop.wait();
          }
        }
      });
    },
    close: function close() {
      this._watching = false;
      if (this._monitor) {
        mainloop.go();
        this._monitor.cancel();
      }
    }
  }),
  fs = {
    readFile: function readFile(file, options, callback) {
      // TODO: supports options
      if (!callback) callback = options;
      GFile.new_for_path(file)
        .load_contents_async(null, (source, result) => {
          mainloop.go();
          try {
            let [ok, data, etag] = source.load_contents_finish(result);
            if (!ok) throw 'Unable to read ' + file;
            callback(null, data);
          } catch(err) {
            callback(err);
          }
        });
      mainloop.wait();
    },
    readFileSync: function readFileSync(file, options) {
      // TODO: supports options
      return GFile.new_for_path(file).load_contents(null)[1];
    },
    readdir: function readdir(path, callback) {
      let fd = GFile.new_for_path(path);
      fd.enumerate_children_async('*', Gio.FileQueryInfoFlags.NONE, null, null, (source, result) => {
        mainloop.go();
        try {
          let
            iterator = source.enumerate_children_finish(result),
            list = [],
            info
          ;
          while ((info = iterator.next_file(null))) {
            list.push(info.get_name());
          }
          callback(null, list.sort());
        } catch(e) {
          callback(e, null);
        }
      });
      mainloop.wait();
    },
    readdirSync: function readdirSync(path) {
      return system('ls -a', path).split('\n').filter(noDots).sort();
    },
    stat: function stat(path, callback) {
      let fd = GFile.new_for_path(path);
      fd.query_info_async('*', Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS, null, null, (source, result) => {
        mainloop.go();
        try {
          let info = source.query_info_finish(result);
          callback(null, new Stats(fd, info));
        } catch(e) {
          callback(e, null);
        }
      });
      mainloop.wait();
    },
    statSync: function statSync(path) {
      let fd = GFile.new_for_path(path);
      if (fd.query_exists(null)) {
        return new Stats(fd, fd.query_info('*', Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS, null));
      } else {
        return null;
      }
    },
    unlink: function unlink(path, callback) {
      let fd = GFile.new_for_path(path);
      fd.delete_async(null, null, (source, result) => {
        mainloop.go();
        try {
          let info = source.delete_async_finish(result);
          callback();
        } catch(e) {
          callback(e);
        }
      });
      mainloop.wait();
    },
    unlinkSync: function unlinkSync(path) {
      GLib.unlink(path);
    },
    watch: function watch(fileName, options, listener) {
      return new FSWatcher(Object.assign(
        {
          name: fileName,
          listener: listener,
          persistent: true,
          recursive: false
        },
        options || {}
      ));
    },
    writeFileSync: function writeFileSync(file, data, options) {
      // TODO: supports options
      let fd, stream, result;
      options = getWriteOptions(options);
      switch (options.flag) {
        case 'w':
          fd = GFile.new_for_path(file);
          try {
            stream = fd.create_readwrite(Gio.FileCreateFlags.REPLACE_DESTINATION, null).output_stream;
          } catch(e) {
            stream = fd.open_readwrite(null).output_stream;
          }
          stream.truncate(0, null);
          stream.write_all(String(data), null);
          stream.flush(null);
          result = stream.close(null);
      }
      return result;
    },
    writeFile: function writeFile(file, data, options, callback) {
      // TODO: supports options
      let fd;
      if (typeof options === 'function') {
        callback = options;
        options = getWriteOptions(null);
      } else {
        options = getWriteOptions(options);
      }
      switch (options.flag) {
        case 'w':
          let onceFoundAWayTowrite = (stream) => {
            stream.truncate(0, null);
            stream.output_stream.write_bytes_async(
              ByteArray.fromString(String(data)),
              0,
              null,
              (source, result) => {
                source.write_bytes_finish(result);
                source.flush_async(0, null, (source, result) => {
                  source.flush_finish(result);
                  source.close_async(0, null, (source, result) => {
                    mainloop.go();
                    callback(!source.close_finish(result));
                  });
                });
              }
            );
          };
          fd = GFile.new_for_path(file);
          fd.create_readwrite_async(
            Gio.FileCreateFlags.REPLACE_DESTINATION,
            0,
            null,
            (source, result) => {
              try {
                onceFoundAWayTowrite(source.create_readwrite_finish(result));
              } catch(e) {
                fd.open_readwrite_async(
                  0,
                  null,
                  (source, result) => {
                    onceFoundAWayTowrite(source.open_readwrite_finish(result));
                  }
                );
              }
            }
          );
          break;
      }
      mainloop.wait();
    }
  }
;

function getWriteOptions(options) {
  if (!options) options = {};
  return {
    encoding: options.encoding || 'utf8',
    mode: options.mode || 666,
    flag: options.flag || 'w'
  };
}

function noDots(fileName) {
  return fileName !== '.' && fileName !== '..';
}

function toInt(info, Gio_CONSTANT) {
  return parseInt(info.get_attribute_as_string(Gio_CONSTANT), 10);
}

function toDate(info, TIME) {
  return info.has_attribute(Gio[TIME]) ? new Date(
    parseFloat(info.get_attribute_as_string(Gio[TIME])) * 1000 +
    parseFloat(info.get_attribute_as_string(Gio[TIME + '_USEC'])) / 1000
  ) : null;
}

module.exports = fs;
