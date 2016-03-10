[
  function pathFormat() {
    return [
      require('path').format({
        root : "/",
        dir : "/home/user/dir",
        base : "file.txt",
        ext : ".txt",
        name : "file"
      }),
      require('path').format({
        root : "",
        dir : "../jsgtk/tests",
        base : "main.js",
        ext : ".js",
        name : "main"
      }),
    ].join('\n');
  },
  function pathParse() {
    return [
      JSON.stringify(require('path').parse('/home/user/dir/file.txt')),
      JSON.stringify(require('path').parse('/home/user/dir/.git')),
      JSON.stringify(require('path').parse('tests/main.js')),
      JSON.stringify(require('path').parse('../jsgtk/tests/main.js')),
    ].join('\n')
  },
  function pathRelative() {
    return [
      require('path').relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'),
      require('path').relative('/data/orandea/test/aaa', '/data/orandea'),
      require('path').relative('/data/orandea', '/data/orandea'),
      require('path').relative('/data/orandea/a/', '/data/orandea/b/')
    ].join(',');
  },
  function logUtil() {
    require('util').log('\u2764\uFE0F');
  },
  function inherits() {
    function A() {}
    function B() {}
    require('util').inherits(B, A);
    var b = new B;
    return  b instanceof A &&
            b instanceof B &&
            B.super_ === A &&
            b.constructor === B;
  }
  //*/
].forEach(
  (function() {'use strict';
    var spawnSync = require('child_process').spawnSync;
    var fnName = function (fn) {
      return String(fn.name || fn).slice(0, 32);
    };
    return function (fn, i, arr) {
      var
        r1,
        r2,
        out, result,
        log = console.log,
        node = spawnSync(
          'node', ['-e', 'console.log(' + fn.toString() + '())']
        ).output
      ;
      if (!node[0]) {
        try {
          r1 = node[1].toString().trim().replace(/(?:\r\n|\r|\n)undefined$/, '');
          console.log = function (msg) {
            out = msg;
          };
          result = fn();
          console.log = log;
          r2 = String(result === undefined ? out : result).trim();
          if (r2 !== r1) {
            throw new Error('expecting ' + r1 + ' but got ' + r2 + ' in ' + fnName(fn));
          }
        } catch(o_O) {
          console.log = log;
          if (!arr.failures) arr.failures = 0;
            arr.failures = arr.failures + 1;
            console.error(o_O.message);
        }
      } else {
        throw new Error('not even NodeJS passed ' + fnName(fn));
      }
      if (i + 1 === arr.length) {
        console.info('[ ' + arr.length + ' tests executed ]');
        if (arr.failures) {
          console.error(arr.failures + ' runtime errors');
        }
      }
    };
  }())
);