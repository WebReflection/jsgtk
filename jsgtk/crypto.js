(function (exports) {'use strict';

  exports.randomBytes = function randomBytes(size) {
    let out = [];
    while (size--) out.push(('0' + ((Math.random() * 16) | 0).toString(16)).slice(-2));
    return out.join('');
  };

}(this));