var os = require('os');

var outcome = {};

Object.keys(os).forEach(key => {
  outcome[key] = typeof os[key] === 'function' ?
    os[key]() : os[key];
});

console.log(
  require('util').inspect(
    outcome,
    {colors: true, depth: 2}
  )
);