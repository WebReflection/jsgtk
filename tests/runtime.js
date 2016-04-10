
// print(imports.gi.GObject.ParamSpec.uint);

print(require("GObject").ParamSpec.uint);

/*
var fs = require('fs');

fs.stat('tests/runtime.js', console.log.bind(console));

fs.watch('tests', {persistent: true, recursive: true})
  .on('change', () => console.log('change'))
  .on('rename', () => console.log('rename'))
  // .close()
;
*/


/*
imports.gi.GIRepository.Repository.get_default().get_loaded_namespaces().forEach((name) => {
  var t = Date.now();
  require(name);
  t = Date.now() - t;
  print(name + ': ' + (t / 1000).toFixed(3));
});
//*/

/*
const
  Gio = require('Gio'),
  current = Gio.File.newForPath(__filename)
;

print(current.getPath());
//*/