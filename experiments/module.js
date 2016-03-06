console.log(
  'module',
  __dirname,
  __filename.slice(
    __dirname.length + require('path').sep.length
  )
);

exports.method = function () {
  return 'module works';
};