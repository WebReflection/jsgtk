# Maintainer: Andrea Giammarchi <andrea.giammarchi@gmail.com>
pkgname=jsgtk
0.8.2
pkgrel=1
pkgver=0.9.0
pkgdesc="A simplified approach to GJS for Node.JS and JavaScript developers."
arch=('any')
url="https://github.com/WebReflection/jsgtk"
license=('MIT')
depends=('gjs')
source=($pkgname-$pkgver.tar.gz)
md5sums=('f035521f493a8f4fe088b9e31bf7b79d')

package() {

  cd "${srcdir}/${pkgname}"

  # Install program files
  mkdir -p "${pkgdir}/usr/lib/${pkgname}"
  cp -r jsgtk_modules "${pkgdir}/usr/lib/${pkgname}"

  # Install a launcher
  install -Dm755 ${pkgname}.sh "${pkgdir}/usr/bin/${pkgname}"

}
