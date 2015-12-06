(function (exports) {'use strict';

  const
    jsgtk = imports.jsgtk,
    slice = jsgtk.env._.slice,
    child_process = jsgtk.child_process,
    execSync = child_process.execSync,
    spawnSync = child_process.spawnSync,
    node =  execSync('which node').toString() ||
            execSync('which nodejs').toString()
  ;

  if (!node) throw new Error('unable to find a valid Node.js executable');

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
      return JSON.parse(spawnSync(node, ['-e', ''.concat(
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