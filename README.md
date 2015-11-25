# jsgtk
coming soon

# Warning
Please note this is an incomplete experiment, I'm just wrapping what I'm learning in this repo.


### How to create a Linux executable with `jsgtk`
```sh
#!/usr/bin/env sh
imports=imports// "exec" "gjs" "-I" "$(dirname $0)/../lib/node_modules/jsgtk/" "$0" "$@"

// everything else ...
let {console} = imports.jstk;
console.log('Hello jsgtk!');
```

### How to create an executable via `node_modules`

If `jsgtk` is installed as dependency, all it needs to know is where it is.
Assuming the following code is in the same directory `node_modules` folder is.

```sh
#!/usr/bin/env sh
imports=imports// "exec" "gjs" "-I" "$(dirname $0)/node_modules/jsgtk/" "$0" "$@"

// everything else ...
let {console} = imports.jstk;
console.log('Hello jsgtk!');
```


### How to create an executable with `jsgtk`
If `jsgtk.js` file and  `jsgtk` folder are in the same executable directory, all it needs is the following.

```sh
#!/usr/bin/env sh
imports=imports// "exec" "gjs" "-I" "$(dirname $0)" "$0" "$@"

const {console} = imports.jsgtk;
console.info('Hello jsgtk!');
```
You can `chmod +x hello-world` and test it directly.