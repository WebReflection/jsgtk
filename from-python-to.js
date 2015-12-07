#!/usr/bin/env sh
imports=imports// "exec" "gjs" "-I" "$(dirname $0)" "$0" "$@"
imports.jsgtk.env;

process.run(function () {

  let
    fs = require('fs'),
    path = require('path'),
    root = path.join('gjs-documentation', 'static'),
    fix = Object.create(null),
    isConstant = (property) => /^[_A-Z0-9]+$/.test(property),
    isClass = (property) => !isConstant(property) && /^[A-Z]/.test(property),
    swapName = (property) => {
      return property.replace(/_(.)/g, ($0, $1) => $1.toUpperCase());
    }
  ;

  fs.readdir(root, (err, files) => {
    files.forEach((file) => {
      let namespace = file.split('-')[0];
      fix[namespace] = Object.create(null);
      fs.readdir(path.join(root, file), (err, info) => {
        info.filter((name) =>
          name.slice(0, 4) === (namespace + '.') &&
          name.indexOf('-') < 0
        ).forEach((info) => {
          info = info.slice(4, info.lastIndexOf('.'));
          if (!isConstant(info)) {
            if (isClass(info)) {
              let
                both = info.split('.'),
                Class = both[0],
                property = both[1]
              ;
              if (both.length > 2) throw new Error('WTF ' + info);
              if (!(Class in fix[namespace])) fix[namespace][Class] = [];
              if (
                property &&
                !isConstant(property) &&
                -1 < property.indexOf('_') &&
                fix[namespace][Class].indexOf(property) < 0
              ) {
                fix[namespace][Class].push(property);
              }
            }
          }
        });
      });
    });

    let output = [
"(function (exports) {'use strict';",
'  const',
  Object.keys(fix).map((nmsp) => ('    ' + nmsp + ' = imports.gi.' + nmsp)).join(',\n'),
'  ;',
  Object.keys(fix).map((namespace) => {
    let output = [];
    Object.keys(fix[namespace]).forEach((info) => {
      if (isClass(info)) {
        try {
          let Class = imports.gi[namespace][info];
          if ('prototype' in Class) {
            let proto = Class.prototype;
            let descriptors = [];
            fix[namespace][info].forEach((property) => {
              let swapped = swapName(property);
              try {
                if (typeof proto[property] === 'function') {
                  descriptors.push('      ' + swapped + ': {\n' + [
  //                  '        configurable: true',
  //                  '        writable: true',
                    '        value: function ' + swapped + '() { return this.' + property + '.apply(this, arguments); }\n'
                  ].join(',\n') + '      }');
                } else {
                  throw 'property';
                }
              } catch(itShouldBeProperty) {
                descriptors.push('      ' + swapped + ': {\n' + [
//                  '        configurable: true',
                  '        get: function () { return this.' + property + '; }',
                  '        set: function (value) { this.' + property + ' = value; }\n'
                ].join(',\n') + '      }');
              }
            });
            if (descriptors.length) {
              output.push('\n  Object.defineProperties(\n    ' + namespace + '.' + info + '.prototype,\n    {\n' + descriptors.join(',\n') + '\n    }\n  );');
            }
          }
        } catch(o_O) {
          // API not implemented or reachable
          console.log('unable to implement ' + namespace + '.' + info);
        }
      }
    });
    return output.join('\n');
  }).join('\n'),
'}(this));'
].join('\n');

    fs.writeFileSync('jsgtk/gi.js', output);

    process.exit(0);

  });

});