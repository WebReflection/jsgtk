const {
  console,
  timers,
  utils
} = (function () {'use strict';
  return {
    console: imports.gsjtk.console,
    timers: imports.gsjtk.timers,
    utils: imports.gsjtk.utils
  };
}());