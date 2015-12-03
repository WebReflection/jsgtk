holdon
======

[![build status](https://secure.travis-ci.org/WebReflection/holdon.png)](http://travis-ci.org/WebReflection/holdon)

# A simple, non atomic, unique key/values based cache

Specially handy in all those situations where one unique id can perform an asynchronous action you don't want to drop the first time is called but you want to store all listeners waiting for such result.

### Simplified API for common cases
```js
module.exports = function (path, callback) {
  // true only if created first time
  if (cache.add(path, callback)) {
    fs.readFile(path, function (err, res) {
      // remove returns the object too
      cache.remove(path).callback.forEach(
        onFileRead, {err: err, res: res}
      );
    });
  }
};

function onFileRead(callback) {
  callback.call(null, this.err, this.res);
}
```

### Full API example
```js
// module: filereader
var fs = require('fs');

// a generic module cache
// with a callback property
var cache = require('holdon').create(['callback']);

function onFileRead(callback) {
  callback.call(null, this.err, this.res);
}

module.exports = function (path, callback) {
  if (!cache.has(path)) {
    fs.readFile(path, function (err, res) {
      var result = cache.get(path);
      // clean this id
      cache.remove(path);
      // invoke all waiting callbacks
      result.callback.forEach(onFileRead, {err: err, res: res});
    });
  }
  // add the path to the queue
  cache.add(path, callback);
};
```

In another file ...
```js
var filereader = require('filereader');

// whenever is needed
filereader('anyFile.md', function (err, res) {
  // do something ...
});

filereader('anyFile.md', function (err, res) {
  // do something ...
});

filereader('anyFile.md', function (err, res) {
  // do something ...
});

// it does not matter how many asking, the disk will read it once
```