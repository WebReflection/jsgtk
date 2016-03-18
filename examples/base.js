// if you have installed jsgtk globally via npm
// you can simply run: jsgtk base.js
console.info('Hello jsGtk+');
console.log(
  require('util').inspect({
    __filename: __filename,
    __dirname: __dirname,
    'process.cwd()': process.cwd(),
    'process.argv': process.argv,
    "require('fs').readdirSync('./') => ": require('fs').readdirSync('./')
  }, {
    colors: true
  })
);