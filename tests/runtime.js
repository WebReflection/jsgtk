const Buffer = require('buffer').Buffer;

console.log([
  new Buffer('HCBoAGUAbABsAG8AHSA=', 'base64').toString('ucs2'),
  //new Buffer('HCBoAGUAbABsAG8AHSA=', 'base64').toString('utf8'),
  // new Buffer('HCBoAGUAbABsAG8AHSA=', 'base64').toString('ascii'),
  new Buffer("“hello”", 'ucs2').toString('ascii')
].join('\n'));