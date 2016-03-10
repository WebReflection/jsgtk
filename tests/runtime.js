console.log([
  require('path').relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'),
  require('path').relative('/data/orandea/test/aaa', '/data/orandea'),
  require('path').relative('/data/orandea', '/data/orandea'),
  require('path').relative('/data/orandea/a/', '/data/orandea/b/')
].join('\n'));

console.log([
  JSON.stringify(require('path').parse('/home/user/dir/file.txt')),
  JSON.stringify(require('path').parse('/home/user/dir/.git')),
  JSON.stringify(require('path').parse('tests/main.js')),
  JSON.stringify(require('path').parse('../jsgtk/tests/main.js')),
].join('\n'));


console.log([
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
].join('\n'));