# JSGtk+
A simplified approach to [GJS](https://wiki.gnome.org/action/show/Projects/Gjs?action=show&redirect=Gjs) for [Node.JS](https://nodejs.org/) and _JavaScript_ developers.



### Project Ideas
Following the current list of project ideas and achievements:

  * a _CommonJS_-like module loader, compatible with any [npm](https://www.npmjs.com/) module
  * a _Node.JS_ like environment with `process`, `console`, `require` and most common _Node.JS_ [core modules](./jsgtk_modules/)
  * an automatically transformed ECMAScript 2015 syntax for _GJS SpiderMonkey_ environment via [babel-standalone](https://github.com/WebReflection/babel-standalone) and [loaded modules](./examples/es6.js)
  * a `camelCase` imported namespace to make _GJS_ modules look more _JavaScripty_
  * a cross platform, lightweight, yet powerful namespace that brings **_Gtk_ native Widgets** to every compatible OS
  * a _Node.JS_ and "_Web.JS_" friendly way to attach/detach signals ( `obj.on(signal, listener)` )



### Platforms
Currently developed and tested on **Linux** ([ArchLinux](https://www.archlinux.org/), [Debian](http://www.debian.org/), [Fedora](https://getfedora.org/), [Ubuntu](http://www.ubuntu.com/)) and **Darwin** ([OSX](http://www.apple.com/uk/osx/)) platforms.



### How To Install

On **ArchLinux** you can simply use `yaourt -S --needed jsgtk` installing from [AUR](https://aur.archlinux.org/packages/jsgtk/).

On other common **Linux** distros, and also on **OSX**, you can use the following terminal command and follow its instructions:
```sh
sh -c "$(curl -fsSL https://webreflection.github.io/jsgtk/install)"
```

<sup><sub>If you would like to know what that script does, feel free to read the used [install file content](https://github.com/WebReflection/jsgtk/blob/gh-pages/install).</sub></sup>


There is also a `jsgtk` package on **npm** and it is possible to install it via `npm install -g jsgtk`.
However, in this case, please be sure you have installed dependencies first.
Some hint about best way to install them might be printed on the terminal once installed.



### Dependencies
This project trusts and uses 100% _GJS_, which is usually available through one of the following procedures:

  * on **ArchLinux**: `pacman -S --needed gjs` and optionally `webkitgtk` for the `browser.js` example
  * on **Debian** and **Ubuntu**: `apt-get install gjs` and optionally `libwebkit2gtk-3.0` or higher for the `browser.js` example
  * on **Fedora**: pretty much everything is already installed
  * on **OSX Homebrew**: `brew install gtk+3 gjs` and optionally `webkitgtk` for the `browser.js` example (although right now there is some problem)
  * on **OSX MacPorts**: `port install gjs adwaita-icon-theme xorg-server xorg-xinit` and optionally `webkit2-gtk` for the `browser.js` example. Please note `xorg-server` requires to log out and back in again before it can work.

Please remember using the installer should already bring in essential dependencies so most likely there's nothing else to do.



### Gtk/UI Examples
To test if everything is fine, you can create a `welcome.js` file and run it via `jsgtk test.js` or, after `chmod +x test.js`, directly via `./test.js`:
```js
#!/usr/bin/env jsgtk
const Gtk = require('Gtk');
Gtk.init(null);
const win = new Gtk.Window({
  title: 'jsgtk',
  type: Gtk.WindowType.TOPLEVEL,
  windowPosition: Gtk.WindowPosition.CENTER
})
  .once('show', () => {
    win.setKeepAbove(true);
    Gtk.main();
  })
  .on('destroy', Gtk.mainQuit)
;
win.add(new Gtk.Label({label: 'Hello jsGtk+'}));
win.setDefaultSize(200, 80);
win.showAll();
```

There is also a [jsgtk-examples](https://github.com/WebReflection/jsgtk-examples#jsgtk-examples) repository which includes most common `GJS` examples, readapted for `jsgtk`.



#### Tests and other examples
If you clone this repository, `npm test` is the way to test few functionalities.
Once cloned locally, you can also try `./jsgtk examples/base.js` or [any other file](./examples).



### Why not [node-gir](https://github.com/creationix/node-gir) or [node-gtk](https://github.com/WebReflection/node-gtk)?
Well, apparently both projects are stuck/abandoned and unfortunately there's no other option ^_^;;