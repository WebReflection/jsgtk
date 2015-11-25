const {
  slice
} = (function () {'use strict';
  return {
    slice: function slice() {
      for (var
        o = +this,
        i = o,
        l = arguments.length,
        n = l - o,
        a = Array(n < 0 ? 0 : n);
        i < l; i++
      ) a[i - o] = arguments[i];
      return a;
    }
  };
}());