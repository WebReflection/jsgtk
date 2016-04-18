const crypto = require('crypto');
const hash = crypto.createHash('sha256');

hash.update('b1', 'binary');
console.log(hash.digest('hex'));