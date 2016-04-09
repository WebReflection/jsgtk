.PHONY: build aur

VERSION=`node -e "console.log(require('./package.json').version)"`

build:
	echo "Building $(VERSION)"
	sleep 1
	if [ -d "aur" ]; then rm -r aur; fi
	mkdir -p aur/jsgtk/jsgtk
	cp jsgtk aur/jsgtk/jsgtk/jsgtk.sh
	sed -i "s/'node_modules', //" aur/jsgtk/jsgtk/jsgtk.sh
	sed -i "s/pkgver=[0-9.]*/pkgver=$(VERSION)/" PKGBUILD
	cp -r jsgtk_modules aur/jsgtk/jsgtk/
	sync
	tar -zcvf jsgtk-$(VERSION).tar.gz -C aur/jsgtk jsgtk
	updpkgsums
	makepkg --printsrcinfo > .SRCINFO
	makepkg -srf
	sync
	rm *.tar.xz
	rm -r {aur,pkg,src}
	if [ -d ~/code/aur/jsgtk ]; then make aur; fi

aur:
	cp {LICENSE,PKGBUILD} ~/code/aur/jsgtk
	mv .SRCINFO ~/code/aur/jsgtk
	mv *.tar.*z ~/code/aur/jsgtk
	echo "$(VERSION)" > ~/code/aur/jsgtk/version
	git add .
	git commit -m "Updating to $(VERSION)"
	git push
	git checkout gh-pages
	mkdir -p archive
	mv ~/code/aur/jsgtk/*.tar.*z archive/
	mv ~/code/aur/jsgtk/version ./
	git add .
	git commit -m "Update `cat version`"
	git push
	git checkout master