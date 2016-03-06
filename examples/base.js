// if you have installed jsgtk globally via npm
// you can simply run: jsgtk base.js
console.info('Hello jsGtk+');
console.log([
  '__filename     ' + __filename,
  '__dirname      ' + __dirname,
  'process.cwd()  ' + process.cwd(),
  'process.argv   ' + JSON.stringify(process.argv, null, 2),
  "require('fs').readdirSync('./') => " + JSON.stringify(
    require('fs').readdirSync('./'), null, 2
  )
].join('\n'));