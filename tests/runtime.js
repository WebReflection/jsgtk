process.nextTick(
  function () {
    console.log.apply(console, arguments);
  },
  'hello',
  '!'
);