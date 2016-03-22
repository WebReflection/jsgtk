imports.gi.GIRepository.Repository.get_default().get_loaded_namespaces().forEach((name) => {
  var t = Date.now();
  require(name);
  t = Date.now() - t;
  print(name + ': ' + (t / 1000).toFixed(3));
});

/*
const
  Gio = require('Gio'),
  current = Gio.File.newForPath(__filename)
;

print(current.getPath());
*/