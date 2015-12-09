#!/usr/bin/env node

var
  child_process = require('child_process'),
  path = require('path'),
  argv = process.argv.slice(1),
  nodeModules = ''
;

child_process.spawn('npm', ['config', 'get', 'prefix'])
  .on('data', function (data) {
    nodeModules += data;
  })
  .on('close', function () {
    console.log(process.cwd());
    console.log(nodeModules);
    console.log(argv);
    child_process.spawn('gjs', ['-I', process.cwd(), '-I', nodeModules].concat(argv))
      .on('close', function () {
        process.exit(0);
      })
      .on('exit', function (code) {
        process.exit(code);
      });
  });