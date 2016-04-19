require('child_process').spawn(
  'notify-send',
  process.argv.slice(-2)
);