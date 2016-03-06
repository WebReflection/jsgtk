#!/usr/bin/env bash
imports=imports// "exec" "gjs" "-I" "$(npm config get prefix)/lib/node_modules/jsgtk/" "$0" "$@"
imports.jsgtk.env;

console.info('Hello global JSGTK!');