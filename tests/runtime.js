const crypto = require('crypto');
const hash = crypto.createHash('sha256');

hash.update('b1');
console.log(hash.digest('hex'));