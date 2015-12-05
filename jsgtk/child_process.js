(function (exports) {'use strict';

  const
    Gio = imports.gi.Gio,
    GLib = imports.gi.GLib,
    jsgtk = imports.jsgtk,
    path = jsgtk.path,
    dir = path.resolve('.'),
    EventEmitter = jsgtk.events.EventEmitter,
    ChildProcess = jsgtk.env._.Class({
      extends: EventEmitter,
      constructor: function ChildProcess(pid) {
        this.pid = pid;
        this.connected = pid != null;
        this.stdout = new EventEmitter;
        this.stderr = new EventEmitter;
      },
      disconnect: function disconnect() {
        this.connected = false;
        this.emit('disconnect');
      },
      kill: function kill(signal) {
        this.connected = false;
        this.emit('exit', null, signal || 'SIGTERM');
      }
    })
  ;

  exports.spawn = function (command, args, options) {
    // TODO: support other options ?
    if (!options) options = {};
    let cp;
    let [ok, pid, stdin, stdout, stderr] = GLib.spawn_async_with_pipes(
      options.cwd || dir,
      [command].concat(args || Array.prototype),
      options.env ? Object.keys(options.env)
        .reduce((a, k) => {
          a.push(k + '=' + options.env[k]);
          return a;
        }, []) : null,
      GLib.SpawnFlags.SEARCH_PATH,
      null
    );
    if (ok) {
      cp = new ChildProcess(pid);
      let
        stream = new Gio.DataInputStream({base_stream : new Gio.UnixInputStream({fd: stdout})}),
        onLineReady = (source, res) => {
          try {
            let [out, length] = source.read_line_finish(res);
            if (cp.connected) {
              if (out == null) cp.emit('close', 0, null);
              else {
                cp.stdout.emit('data', out + '\n');
                readLine();
              }
            }
          } catch (o_O) {
            cp.stderr.emit('data', o_O);
          }
        },
        readLine = () => stream.read_line_async(GLib.PRIORITY_LOW, null, onLineReady)
      ;
      readLine();
    } else {
      cp = new ChildProcess(null);
      setTimeout(() => cp.emit('error', stderr), 30);
    }
    return cp;
  };

  exports.execSync = function execSync(command, options) {
    // TODO: support other options ?
    if (!options) options = {};
    let [ok, stdout, stderr, exit_status] = GLib.spawn_command_line_sync(
      options.cwd ? ('cd ' + options.cwd + ' && ' + command) : command
    );
    if (!ok) throw stderr;
    return stdout;
  };

  exports.spawnSync = function spawnSync(command, args, options) {
    // TODO: support other options ?
    if (!options) options = {};
    let [ok, stdout, stderr, exit_status] = GLib.spawn_sync(
      options.cwd || dir,
      [command].concat(args || Array.prototype),
      options.env ? Object.keys(options.env)
        .reduce((a, k) => {
          a.push(k + '=' + options.env[k]);
          return a;
        }, []) : null,
      GLib.SpawnFlags.SEARCH_PATH,
      null
    );
    return {
      output: [null, stdout, stderr],
      stdout: stdout,
      stderr: stderr,
      status: exit_status,
      error: ok ? null : stderr
    };
  };

}(this));