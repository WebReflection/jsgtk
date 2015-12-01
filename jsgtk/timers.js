(function (exports) {'use strict';

  const Mainloop = imports.mainloop;

  exports.clearInterval = clear();
  exports.clearTimeout = clear();
  exports.setInterval = set(true);
  exports.setTimeout = set(false);

  function clear() {
    return (id) => Mainloop.source_remove(id);
  }

  function set(repeat) {    // spec compliant
    return function (fn, ms /*, ...args*/) {
      const args = [];
      for (let i = 2; i < arguments.length; i++) {
        args[i - 2] = arguments[i];
      }
      return Mainloop.timeout_add((ms * 1) || 0, () => {
        fn.apply(null, args);
        return repeat;
      });
    };
  }

}(this));