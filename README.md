# JSGTK
An attempt to make [GJS](https://wiki.gnome.org/action/show/Projects/Gjs?action=show&redirect=Gjs) more JavaScript and Node.JS friendly, bringing in CommonJS modules loader and indeed able to work with [npm](https://www.npmjs.com/) modules too.



### Quick How To
In order to install `jsgtk` simply use `npm`
```sh
npm install jsgtk
```
In order to include the `jsgtk` runtime, write the following code at the very top of your file:
```sh
#!/usr/bin/env sh
imports=imports// "exec" "gjs" "-I" "$(dirname $0)/node_modules/jsgtk/" "$0" "$@"
imports.jsgtk.env;

// the rest of your code here, e.g.
console.info('Hello JSGTK');
```
It is now possible to `chmod +x jsgtk-file-name` and launch it directly.



### How to install GJS
It is quite pointless to have `jsgtk` if you don't have a usable version of GJS.
Following how I've installed it in few platforms I could test.


#### Linux

  * in [ArchLinux](https://www.archlinux.org/), a command such `pacman -S --needed npm gjs` would do
  * in [Ubuntu](http://www.ubuntu.com/), a command such `sudo apt-get install npm gjs` should do as well


#### OSX
The easiest way to install GJS in OSX and use JSGTK too is the following sequence of instruction in the terminal.
Feel free to copy and paste below code into `gjs.sh` and then execute it via `sh gjs.sh`.
```sh
# verify and eventually install Homebrew
if [ "$(which brew)" = "" ]; then
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

# verify and eventually install npm
if [ "$(which npm)" = "" ]; then
  brew install npm
fi

# install gjs via https://github.com/TingPing/homebrew-gnome
brew tap TingPing/gnome
brew install gtk+3
brew install gjs
```
Please note something else might need to be installed, it could take up to 15 minutes to download and install from scratch everything.


### How to verify everything is OK

![Hello GJS!](data:image/png;base64,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J9u2lV9QoPDw8Fp/YEqqXhB/8ZVXfY+4uPoPv9dFQ4f6tns8Hr302mvNWj/Q2rEGglYrMSFByUmJvveWZSkmOrpOeOTm5ulvj/5DmVnbfJ99NmeO3G63JKmyqkpTn39BWzMym6dw4BRhXTBkCBO+aLVc8fHq1bOHevfooaSkREVFRsrPz09FRcXauXuXVqz8TgsXL1Z5eXmdfW+64XqFhoZq5qefac/evS1QPdC6WedfeCEBAgA4bkxhAQCMECAAACMECADACAECADBCgAAAjBAgAAAjBAgAwAgBAgAw4mfz5FEAgAFGIAAAIwQIAMAIAQIAMMIaCADACCMQAIARAgQAYMSvtKSkpWsAALRCjEAAAEb8CvLyWroGAEArxAgEAGDELzk1taVrAAC0QoxAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUDQqnz8/nuaM/NjjRg+zGg7gKbj19IF4Ndp9HXXatRVV6qkpERXj76p0ftNffpJndmxoxYtWaKnn5168gpsJRwOh9LTeqt/nz7q2qWzoqOiFBgUpNKSEpWWlam4pEQ//bRV67//QRs3bVLZgQPHPOaH776t0JAQvffBh3p3+gf1trEsS+ecfZZGDBumxIQEuVzxCgoM0t7sbGVnZ2trZqbmL1qkvLz8o/bz8nPTlJSYoC/mfqXnXnrZ+N8Apy4CBDhJzjn7LI0bM0YdUlPqbIuMjFRkZKQk6eyuXXX5yN9p0eIlenrKiYduSvtkTb59gjp36lRnW4fUFHVITVH/fn11/TVX64GH/6IfNm464T5xeiJA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hYXpqX88qk9nz9GmzZtVXFKiMzt21IhhQ32/5a/b8L3RI9Z/2LhJTz4zRXdNnihXfLyefuxRrfxutZYuX649e/eqsrJSbdq0UVRkpDqdeaYuGNBfUb/8bZB16zcoOydHUZGROufss7Vv3z4FBAYoOSlJV4z8ne9ChLlfzVNJSUmtfqMiI/Xcs/9UeXm5Vq9dp+83btS+fftVUFioyMg26pCSouFDhyg5qfpqtPLyCj329NOqqqqqcw7h4eF69flpkqTsnH2afM+9x/3vgFMfAYJm9fncuQoJCdZNN1yvs7t21dldu9bbLiMzs94Amb/oa91y42i54uP10H3VX2orVq7S3x97vFHb16xbr39O/X+aNGG8/P39ddUVl0tXXF6nnzVr1+nxfz4jr9drdJ5LvvlGubm5Gn/bGHVITVXf9DT1TU87avv8/HzN/GyWPpk1W16vVwP69dXdk+tfJ1qzbr1e+98363zetUtnVbndCgsL06CB1Y9kOZq169frtTfe1PYaV47VZFmWwsPDJUmlZWUNnSpOYwQImt1HMz/R8hUrNWL4MKW0T1ZiQoLi4uJUVlamgoICbc3I1LoNG2RZVp0rjT6dNVuhISEaPmSIgoKDtHPnTq3/4YdGb5ekRYuX6IdNmzTykkvUq2cPueLj5R8QoKLCIm3+8UctXLxYK1d9Z3SVU02btmzRxLvuUZ+0NA3o11ddOndWVFSkggIDdeDAAeXl5ysza5uWfbtCq1avrvW3OTwejzZv+VHt2roUFBSsvdnZ2r1nj5Z9+63+b+myeoNt+YqVuu6mPyq9dy+l9+6tti6X4uJiFR0VpcKiImXn5GjHzl36Yu5X2rZ9+wmdGyBJVv9Bg07s/xIAwGmJRXQAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAEQIEAGCEAAEAGCFAAABGCBAAgBECBABghAABABghQAAARggQAIARAgQAYIQAAQAYIUAAAEYIEACAkf8PYta75nITYDoAAAAASUVORK5CYII=)

If everything went OK, you can now `gjs` in the terminal and play around with `js24` SpiderMonkey CLI.
Please note `gjs` doesn't work as interactively as `node`, in order to run a program you need to launch it via `gjs program.js` or using file headers previously described.
If you'd like to test the look and feel of a basic widget, feel free to save the following code in a `ui.js` file.
```js
#!/usr/bin/env gjs

(function (Gtk){'use strict';

  Gtk.init(null, 0);

  const
    win = new Gtk.Window({
      type : Gtk.WindowType.TOPLEVEL,
      window_position: Gtk.WindowPosition.CENTER
    })
  ;

  win.set_default_size(200, 80);
  win.add(new Gtk.Label({label: 'Hello GJS!'}));
  win.connect('show', () => Gtk.main());
  win.connect('destroy', () => Gtk.main_quit());
  win.show_all();

}(imports.gi.Gtk));
```
Feel free to `chmod +x ui.js` and then launch it directly.



### About the Dark Theme
If there's something I love about [GNOME Desktop](https://www.gnome.org/) is its Adwaita Dark Theme.
The good news is that you can  have it in GJS too trying at least two things:

  * use this line after the init: `Gtk.Settings.get_default().set_property('gtk-application-prefer-dark-theme', true);`
  * set an environment variable either before launching the app `GTK_THEME=Adwaita:dark ./app.js` or in the `~/.bashrc` or `profile` file in order to have it always set
  * use a special header that will set an environment variable before launching the app

The latter case is summarized in the following header:
```js
#!/usr/bin/env sh
imports=imports// "export" "GTK_THEME=Adwaita:dark" && "exec" "gjs" "-I" "$(dirname $0)/node_modules/jsgtk/" "$0" "$@"
imports.jsgtk.env;

// the rest of your code here
```


### About the Python/C code style
I am working to bring a JS like style through the `jsgtk.gi` import, which is nothing but enriched native API with all aliases that will make methods like `win.set_default_size(200, 80);` become `win.setDefaultSize(200, 80);`, as well as every other method, property, or public static method. This is a work in progress but so far the entire `Gio`, `GLib`, and `GObject` has been covered.

Feel free to check on  top of the [jsgtk.gi](jsgtk/gi.js) file which native module has been patched through `jsgtk.gi` module.



### Stability
Please note while GTK3 is rock solid stable and production ready (GNOME Desktop uses it, to name just one) this project is highly experimental so its JS functionality might not be as perfect as expected. For instance, few File System operations are incomplete and options are partially ignored and not a 1:1 nodejs like solution. I am working on my free time to make this project as stable and reliable as possible, and every kind of contribution will be more than welcome, specially if you are more familiar than I am with GTK3 or even GJS.

Thanks!


### License
This project is under MIT Style license.
```
Copyright (c) 2015 - Andrea Giammarchi & JSGTK Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```