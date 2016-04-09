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
On **OSX** you can use the following terminal command and follow instructions:
```sh
sh -c "$(curl -fsSL https://webreflection.github.io/jsgtk/mac)"
```
Following the used [mac file content](https://github.com/WebReflection/jsgtk/blob/gh-pages/mac).


On **ArchLinux** you can use `yaourt -S --needed jsgtk` installing from [AUR](https://aur.archlinux.org/).

It is also possible to install it via `npm install -g jsgtk` but in this case please be sure you have installed dependencies first.
A hint about best way to install them might be printed on the terminal.



### Dependencies
This project trusts and uses 100% _GJS_, which is usually available through one of the following procedures:

  * on **ArchLinux**: `pacman -S --needed gjs` and optionally `webkitgtk` for the `browser.js` example
  * on **Debian** and **Ubuntu**: `apt-get install gjs` and optionally `libwebkit2gtk-3.0` or higher for the `browser.js` example
  * on **Fedora**: pretty much everything is already installed
  * on **OSX Homebrew**: `brew install gtk+3 gjs` and optionally `webkitgtk` for the `browser.js` example (although right now there is some problem)
  * on **OSX MacPorts**: `port install gjs adwaita-icon-theme xorg-server xorg-xinit` and optionally `webkit2-gtk` for the `browser.js` example. Please note `xorg-server` requires to log out and back in again before it can work.



### Gtk/UI Examples
The [following repository](https://github.com/WebReflection/jsgtk-examples#jsgtk-examples) includes most common `GJS` examples readapted for `jsgtk`.



### Why not [node-gir](https://github.com/creationix/node-gir) or [node-gtk](https://github.com/WebReflection/node-gtk)?
Well, apparently both projects are stuck/abandoned and unfortunately there's no other option ^_^;;



### Tests, Examples, Demos
If you clone this repository, `npm test` is the way to test, `./jsgtk examples/base.js` or other files the way to try out demos.