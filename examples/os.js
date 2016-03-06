var os = require('os');
var outcome = {};
Object.keys(os).forEach(key => {
  outcome[key] = typeof os[key] === 'function' ?
    os[key]() : os[key];
});
console.log(JSON.stringify(outcome, null, 2));