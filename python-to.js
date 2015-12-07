#!/usr/bin/env sh
imports=imports// "exec" "gjs" "-I" "$(dirname $0)" "$0" "$@"
imports.jsgtk.env;

process.run(function () {

  let
    fs = require('fs'),
    path = require('path'),
    root = path.join('gjs-documentation', 'html'),
    fix = Object.create(null),
    isConstant = (property) => /^[_A-Z0-9]+$/.test(property),
    isClass = (property) => !isConstant(property) && /^[A-Z]/.test(property),
    swapName = (property) => {
      return property.replace(/_(.)/g, ($0, $1) => $1.toUpperCase());
    }
  ;

  fs.readdirSync(root).forEach((file) => {
    let namespace = file.split('-')[0];
    fix[namespace] = {
      namespace: Object.create(null),
      static: []
    };
    fs.readdirSync(path.join(root, file)).filter(
      (name) =>
        name.slice(0, namespace.length + 1) === (namespace + '.') &&
        name.indexOf('-') < 0
    ).forEach((info) => {
      info = info.slice(namespace.length + 1, info.lastIndexOf('.'));
      if (!isConstant(info)) {
        if (isClass(info)) {
          let
            both = info.split('.'),
            Class = both[0],
            property = both[1],
            target = fix[namespace].namespace
          ;
          if (both.length > 2) throw new Error('WTF ' + info);
          if (!(Class in target)) target[Class] = {
            prototype: {
              methods: [],
              properties: []
            },
            static: []
          };
          if (
            property &&
            !isConstant(property) &&
            -1 < property.indexOf('_')
          ) {
            let constructor = imports.gi[namespace][Class];
            if (property in constructor) {
              target[Class].static.push(property);
            } else {
              try {
                if (typeof constructor.prototype[property] === 'function') {
                  target[Class].prototype.methods.push(property);
                } else {
                  throw 'property';
                }
              } catch(probablyAProperty) {
                target[Class].prototype.properties.push(property);
              }
            }
          }
        } else if (-1 < info.indexOf('_')) {
          try {
            let method = imports.gi[namespace][info];
            if (typeof method === 'function') {
              fix[namespace].static.push(info);
            } else {
              console.error('unable to handle ' + namespace + '.' + info);
            }
          } catch(e) {
            console.warn(namespace + '.' + info + ' is probably broken');
          }
        }
      }
    });
  });

  let output = [
    "(function (exports) {'use strict';",
    '  // WARNING This file is generated automatically',
    '  //         Do Not change it directly or it will be replaced',
    '  //         and it could cause conflicts. Use python-to.js instead.',
    '  const',
    Object.keys(fix).map((namespace) => (
    '    ' + namespace + ' = imports.gi.' + namespace
    )).join(',\n'),
    '  ;',
    Object.keys(fix).map((namespace) => {
      let output = [];
      let descriptors = [];
      fix[namespace].static.forEach((property) => {
        descriptors.push(createMethod(property));
      });
      output.push(createDefinition(namespace, descriptors));
      let target = fix[namespace].namespace;
      Object.keys(target).forEach((Class) => {
        if (target[Class].static.length) {
          descriptors = [];
          target[Class].static.forEach((property) => {
            descriptors.push(createMethod(property));
          });
          output.push(createDefinition(namespace + '.' + Class, descriptors));
        }
        descriptors = [];
        if (target[Class].prototype.properties.length) {
          target[Class].prototype.properties.forEach((property) => {
            descriptors.push(createAccessor(property));
          });
        }
        if (target[Class].prototype.methods.length) {
          target[Class].prototype.methods.forEach((property) => {
            descriptors.push(createMethod(property));
          });
        }
        if (descriptors.length) {
          output.push(createDefinition(namespace + '.' + Class + '.prototype', descriptors));
        }
      });
      return output.join('\n');
    }).join('\n'),
    '}(this));'
  ].join('\n');

  function createAccessor(property) {
    let name = swapName(property);
    return [
      '      ' + name + ': {',
      '        get: function () { return this.' + property + '; },',
      '        set: function (value) { this.' + property + ' = value; }',
      '      }'
    ].join('\n');
  }

  function createDefinition(target, descriptors) {
    return [
      '  Object.defineProperties(',
      '    ' + target + ',',
      '    {',
             descriptors.join(',\n'),
      '    }',
      '  );'
    ].join('\n');
  }

  function createMethod(property) {
    let name = swapName(property);
    return [
      '      ' + name + ': {',
      '        value: function ' + name + '() {',
      '          return this.' + property + '.apply(this, arguments);',
      '        }',
      '      }'
    ].join('\n');
  }

  fs.writeFileSync('jsgtk/gi.js', output);

  process.exit(0);

});