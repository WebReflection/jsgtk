# JSGtk+
A simplified approach to [GJS](https://wiki.gnome.org/action/show/Projects/Gjs?action=show&redirect=Gjs) for [Node.JS](https://nodejs.org/) and _JavaScript_ developers.

### Project Ideas
Following the current list of project ideas and achievements:

  * a _CommonJS_-like module loader, compatible with any [npm](https://www.npmjs.com/) module that uses _GJS_ compatible syntax and features already implemented in _JSGtk+_
  * a _Node.JS_ like environment with `process`, `console`, `require` and most common _Node.JS_ core modules
  * a `camelCase` namespace to make _GJS_ look more _JavaScripty_
  * a cross platform, lightweight, yet powerful namespace that brings **_Gtk_ native Widgets** to every compatible OS
  * a _Node.JS_ and "_Web.JS_" friendly way to attach/detach signals ( `obj.on(signal, listener)` )

### Examples
The [following repository](https://github.com/WebReflection/jsgtk-examples#jsgtk-examples) includes most common `GJS` examples readapted for `jsgtk`.

### Platforms
Currently developed and tested on **Linux** ([ArchLinux](https://www.archlinux.org/), [Debian](http://www.debian.org/), [Fedora](https://getfedora.org/), [Ubuntu](http://www.ubuntu.com/)) and **Darwin** ([OSX](http://www.apple.com/uk/osx/)) platforms.

### How To Install
A basic `npm install -g jsgtk` is all you need but please be sure you have installed dependencies first.

### Dependencies
This project trusts and uses 100% _GJS_, which is usually available through one of the following procedures:

  * on **ArchLinux**: `pacman -S --needed gjs` and optionally `webkitgtk` for the `browser.js` example
  * on **Debian** and **Ubuntu**: `apt-get install gjs` and optionally `libwebkit2gtk-3.0` or higher for the `browser.js` example
  * on **Fedora**: `yum install gjs`
  * on **OSX Homebrew**: `brew install gtk+3 gjs` and optionally `webkitgtk` for the `browser.js` example (although right now there is some problem)
  * on **OSX Macports**: `port install gjs` and optionally `webkit2-gtk3` for the `browser.js` example

### Why not [node-gir](https://github.com/creationix/node-gir) or [node-gtk](https://github.com/WebReflection/node-gtk)?
Well, apparently both projects are stuck/abandoned and unfortunately there's no other option ^_^;;

### Tests, Examples, Demos
If you clone this repository, `npm test` is the way to test, `./jsgtk examples/base.js` or other files the way to try out demos.