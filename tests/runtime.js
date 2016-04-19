
const crypto = require('crypto');
const hash = crypto.createHmac('sha256', 'a secret');

hash.update('hello there');
console.log(hash.digest('hex'));

