(function (exports) {'use strict';

  const
    Gio = imports.gi.Gio,
    ByteArray = imports.byteArray,
    child_process = imports.jsgtk.child_process
  ;

  exports.readFile = function readFile(file, options, callback) {
    // TODO: supports options
    if (!callback) callback = options;
    Gio.File.new_for_path(file)
      .load_contents_async(null, (source, result) => {
        try {
          let [ok, data, etag] = source.load_contents_finish(result);
          if (!ok) throw 'Unable to read ' + file;
          callback(null, data.toString());
        } catch(err) {
          callback(err);
        }
      });
  }

  exports.readFileSync = function readFileSync(file, options) {
    // TODO: supports options
    return Gio.File.new_for_path(file).load_contents(null)[1].toString();
  };

  // TODO: find out if there's a better way
  exports.readdir = function readdirSync(path, callback) {
    let
      ls = child_process.spawn('ls', [path]),
      out = [],
      errors = false
    ;
    ls.stderr.on('data', (data) => (errors = true, out.push(data.trim())));
    ls.stdout.on('data', (data) => out.push(data.trim()));
    ls.on('close', () => {
      if (errors) callback(out.join(''));
      else callback(null, out);
    });
  };
  exports.readdirSync = function readdirSync(path) {
    return child_process.spawnSync('ls', [path]).stdout.toString().trim().split('\n');
  };

  exports.statSync = function statSync(path) {
    let fd = Gio.File.new_for_path(path);
    if (fd.query_exists(null)) {
      // https://people.gnome.org/~gcampagna/docs/Gio-2.0/Gio.FileInfo.html
      let
        info = fd.query_info('*', Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS, null),
        out = {
          // TODO: all wrong!!!
          dev: info.get_attribute_int32('dev'),
          ino: info.get_attribute_int32('ino'),
          mode: info.get_attribute_int32('mode'),
          nlink: info.get_attribute_int32('nlink'),
          uid: info.get_attribute_int32('uid'),
          gid: info.get_attribute_int32('gid'),
          rdev: info.get_attribute_int32('rdev'),
          size: info.get_size(),
          blksize: info.get_attribute_int32('blksize'),
          blocks: info.get_attribute_int32('blocks'),
          atime: info.get_attribute_int32('atime'),
          mtime: info.get_attribute_int32('mtime'),
          ctime: info.get_attribute_int32('ctime'),
          birthtime: info.get_attribute_int32('birthtime')
        }
      ;
      // Object.keys(out).forEach((key) => log(key + ': ' + out[key]));
      return out;
    } else {
      return null;
    }
  };

  exports.writeFileSync = function writeFileSync(file, data, options) {
    // TODO: supports options
    let fd, stream, result;
    options = getWriteOptions(options);
    switch (options.flag) {
      case 'w':
        fd = Gio.File.new_for_path(file);
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
  };

  exports.writeFile = function writeFileSync(file, data, options, callback) {
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
                  callback(!source.close_finish(result));
                });
              });
            }
          );
        };
        fd = Gio.File.new_for_path(file);
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
  };

  function getWriteOptions(options) {
    if (!options) options = {};
    if (!options.encoding) options.encoding = 'utf8';
    if (!options.mode) options.mode = 666;
    if (!options.flag) options.flag = 'w';
    return options;
  }

}(this));