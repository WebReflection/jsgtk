/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/child_process.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports */

const

  GLib = imports.gi.GLib,

  Class = process.binding('util').Class,
  mainloop = process.binding('mainloop'),

  CURRENT_DIR = GLib.get_current_dir(),

  empty = Array.prototype,
  keys = Object.keys,

  EventEmitter = require('events').EventEmitter,
  Stream = require('stream').Stream,

  loopGoIfConnected = function () {
    if (this.pid) {
      GLib.spawn_close_pid(this.pid);
      this.pid = null;
    }
    if (this.connected) {
      this.connected = false;
      mainloop.go();
    }
  },

  disconnectChild = function () {
    loopGoIfConnected.call(this);
    this.stdin.emit('disconnect');
    this.stdout.emit('disconnect');
    this.stderr.emit('disconnect');
  },

  ChildProcess = Class(EventEmitter, {
    constructor: function ChildProcess(ok, pid, stdin, stdout, stderr) {
      EventEmitter.call(this);
      if (ok) {
        mainloop.wait();
        this.pid = pid;
        this.connected = ok;
        this.stdin = new Stream(stdin)
          .on('error', (reason) => this.emit('error', reason));
        this.stdout = new Stream(stdout)
          .on('close', (code, reason) => {
            loopGoIfConnected.call(this);
            this.emit('close', code, reason);
          })
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
    unref: function () {
      // TODO: try to make unref possible
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
  })
;

module.exports = {
  spawn: function spawn(command, args, options) {
    if (!options) options = {};
    let cp, [ok, pid, stdin, stdout, stderr] = GLib.spawn_async_with_pipes(
      options.cwd || CURRENT_DIR,
      [command].concat(args || empty),
      options.env ? keys(options.env)
        .reduce((a, k) => {
          a.push(k + '=' + options.env[k]);
          return a;
        }, []) : null,
      GLib.SpawnFlags.SEARCH_PATH,
      null
      /*
      ,null
      ,null
      ,GLib.SPAWN_CHILD_INHERITS_STDIN
      ,GLib.SPAWN_STDOUT_TO_DEV_NULL
      ,GLib.SPAWN_STDERR_TO_DEV_NULL
      ,null
      //*/
    );
    if (ok) {
      cp = new ChildProcess(ok, pid, stdin, stdout, stderr);
    } else {
      cp = new ChildProcess(null);
      setTimeout(() => cp.emit('error', stderr), 0);
    }
    return cp;
  },

  execSync: function execSync(command, options) {
    // TODO: support other options ?
    if (!options) options = {};
    let [ok, stdout, stderr, exit_status] = GLib.spawn_command_line_sync(
      options.cwd ? ('cd ' + options.cwd + ' && ' + command) : command
    );
    if (!ok) throw stderr;
    return stdout;
  },

  spawnSync: function spawnSync(command, args, options) {
    // TODO: support other options ?
    if (!options) options = {};
    let [ok, stdout, stderr, exit_status] = GLib.spawn_sync(
      options.cwd || CURRENT_DIR,
      [command].concat(args || empty),
      options.env ? keys(options.env)
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
  }
};
