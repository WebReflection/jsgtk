(function (exports) {'use strict';

  const
    Gio = imports.gi.Gio,
    GLib = imports.gi.GLib,
    jsgtk = imports.jsgtk,
    path = jsgtk.path,
    dir = path.resolve('.'),
    EventEmitter = jsgtk.events.EventEmitter,
    Stream = jsgtk.stream.Stream,
    ChildProcess = jsgtk.env._.Class({
      extends: EventEmitter,
      constructor: function ChildProcess(ok, pid, stdin, stdout, stderr) {
        if (ok) {
          this.pid = pid;
          this.connected = ok;
          this.stdin = new Stream(stdin)
            .on('error', (reason) => this.emit('error', reason));
          this.stdout = new Stream(stdout)
            .on('close', (code, reason) => this.emit('close', code, reason))
            .on('error', (reason) => this.emit('error', reason));
          this.stderr = new Stream(stderr)
            .on('error', (reason) => this.emit('error', reason));
          this.stdio = [
            this.stdin,
            this.stdout,
            this.stderr
          ];
        }
      },
      connected: false,
      disconnect: function disconnect() {
        disconnectChild.call(this);
        this.emit('disconnect');
      },
      kill: function kill(signal) {
        disconnectChild.call(this);
        this.emit('exit', null, signal || 'SIGTERM');
      }
    }),
    disconnectChild = function () {
      this.connected = false;
      this.stdin.emit('disconnect');
      this.stdout.emit('disconnect');
      this.stderr.emit('disconnect');
      GLib.spawn_close_pid(this.pid);
    }
  ;

  exports.spawn = function aspawn(command, args, options) {
    if (!options) options = {};
    let cp, [ok, pid, stdin, stdout, stderr] = GLib.spawn_async_with_pipes(
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
      cp = new ChildProcess(ok, pid, stdin, stdout, stderr);
    } else {
      cp = new ChildProcess(null);
      setTimeout(() => cp.emit('error', stderr), 0);
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