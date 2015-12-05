(function (exports) {'use strict';

  const
    jsgtk = imports.jsgtk,
    slice = jsgtk.env._.slice,
    spawnSync = jsgtk.child_process.spawnSync
  ;

  exports.EOL = '\n';

  [
    'arch',
    'cpus',
    'endianness',
    'freemem',
    'homedir',
    'hostname',
    'loadavg',
    'networkInterfaces',
    'platform',
    'release',
    'tmpdir',
    'totalmem',
    'type',
    'uptime'
  ].forEach((method) => {
    exports[method] = function () {
      return JSON.parse(spawnSync('node', ['-e', ''.concat(
        'var os = require(\'os\');',
        'process.stdout.write(JSON.stringify(',
          'os.', method, '.apply(os,',
            arguments.length ? JSON.stringify(slice.apply(0, arguments)) : '[]'
          ,')',
        '));'
      )]).stdout.toString());
    };
  });

}(this));