#!/usr/bin/env bash

if [ "$(which gjs 2> /dev/null)" = "" ]; then
  echo ''
  echo -e "$(tput bold)Please install GJS via:$(tput sgr0)"
  if [ "$(uname)" = "Darwin" ]; then
    if [ "$(which brew)" = "" ]; then
      if [ "$(which port)" = "" ]; then
        echo '  please install either homebrew or macports'
        echo '    http://brew.sh/'
        echo '      brew install gtk+3 gjs'
        echo ''
        echo '    https://www.macports.org/'
        echo '      sudo port install gjs'
      else
        echo '  sudo port install gjs'
      fi
    else
      echo '  brew install gtk+3 gjs'
    fi
  else
    if [ "$(uname)" = "Linux" ]; then
      if [ "$(which pacman 2> /dev/null)" = "" ]; then
        if [ "$(which apt-get 2> /dev/null)" = "" ]; then
          if [ "$(which yum 2> /dev/null)" = "" ]; then
            echo '  not sure how you install stuff in here'
            echo '  but these are most likely modules you need:'
            echo '    gobject-introspection libgirepository-1.0 gjs'
          else
            echo '  sudo yum install gjs'
          fi
        else
          # gobject-introspection libgirepository1.0-dev # ???
          echo '  sudo apt-get install gjs'
        fi
      else
        # gobject-introspection # ???
        echo '  sudo pacman -S --needed gjs'
      fi
    else
      echo '  This platform is not supported.'
      echo '  Please consider using MSYS2'
      echo '    https://msys2.github.io/'
    fi
  fi
  echo ''
  sleep 3
fi