
const crypto = require('crypto');
const hash = crypto.createHmac('sha256', 'a secret');

hash.update('hello');
hash.update('there');
console.log(hash.digest('hex'));

