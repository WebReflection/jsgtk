/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/os.html
 * JSGtk Status         incomplete
 */

// TODO: this module is mostly based on synchronous CLI calls
//       not only it's not portable as it is but there is
//       surely a better way of doing this.

/* jshint esversion: 6, strict: implied, node: true */
/* global imports */

const

  GLib = imports.gi.GLib,

  EOL = process.platform === 'win32' ? '\r\n' : '\n',
  IPV4SN = Array(33).join('0'),
  IPV6SN = Array(129).join('0'),

  system = imports.jsgtk.system,

  trim = String.prototype.trim,

  // different per platform
  multiOp = {
    darwin: {
      cpus: function getCPUs() {
        let
          cores = parseFloat(system('sysctl -n hw.ncpu')),
          frequency = parseFloat(system('sysctl -n hw.cpufrequency')) / 1000 / 1000,
          brandString = system('sysctl -n machdep.cpu.brand_string').replace(/\s+/g, ' '),
          cpus = Array(cores)
        ;
        while (cores--) {
          /* jshint loopfunc:true */
          cpus[cores] = {
            model: brandString,
            speed: frequency,
            get times() {
              console.warn('cpus.times is not supported');
              return {};
            }
          };
        }
        return cpus;
      },
      freemem: function getFreeMem() {
        return  parseFloat(system('sysctl -n hw.memsize')) -
                parseFloat(system('sysctl -n hw.physmem'));
      },
      loadavg: function getLoadAvg() {
        return /load\s+averages:\s+(\d+(?:\.\d+))\s+(\d+(?:\.\d+))\s+(\d+(?:\.\d+))/.test(
          system('uptime')
        ) && [
          parseFloat(RegExp.$1),
          parseFloat(RegExp.$2),
          parseFloat(RegExp.$3)
        ];
      },
      networkInterfaces: function getInterfaceAddresses() {
        const ifaces = {};
        for (let
          lines = system('ip addr').split(/\n/),
          i = 0; i < lines.length; i++
        ) {
          let line = lines[i];
          if (/^\d+:\s+(\S+?):/.test(line)) {
            let iface = [];
            ifaces[RegExp.$1] = iface;
          }
        }
        return ifaces;
      },
      totalmem: function getTotalMem() {
        return parseFloat(system('sysctl -n hw.memsize'));
      },
      uptime: function getUptime() {
        let
          uptime = system('uptime'),
          up = /up\s+([^,]+)?,/.test(uptime) && RegExp.$1
        ;
        switch (true) {
          case /^(\d+):(\d+)$/.test(up):
            return ((parseInt(RegExp.$1, 10) * 60) + parseInt(RegExp.$2, 10)) * 60;
          case /^(\d+)\s+mins?$/.test(up):
            return parseInt(RegExp.$1, 10) * 60;
          case /^(\d+)\s+days?$/.test(up):
            return (parseInt(RegExp.$1, 10) * 86400) + (
              /days?,\s+^(\d+):(\d+)$/.test(uptime) && (
                ((parseInt(RegExp.$1, 10) * 60) +
                parseInt(RegExp.$2, 10)) * 60
              )
            );
        }
        return up;
      }
    },
    linux: {
      cpus: function getCPUs() {
        let
          PROCESSOR = /^processor\s*:\s*(\d+)/i,
          NAME = /^model[\s_]+name\s*:([^\r\n]+)/i,
          FREQ = /^cpu[\s_]+MHz\s*:\s*(\d+)/i,
          cpus = [],
          cpu
        ;
        system('cat /proc/cpuinfo').split(/\r\n|\n|\r/).forEach((line) => {
          switch (true) {
            case PROCESSOR.test(line):
              cpus[trim.call(RegExp.$1)] = (cpu = {
                model: '',
                speed: 0,
                get times() {
                  console.warn('cpus.times is not supported');
                  return {};
                }
              });
              break;
            case NAME.test(line):
              cpu.model = trim.call(RegExp.$1);
              break;
            case FREQ.test(line):
              cpu.speed = parseFloat(trim.call(RegExp.$1));
              break;
          }
        });
        return cpus;
      },
      freemem: function getFreeMem() {
        let I, mem = system('free -b').split(EOL);
        mem[0].split(/\s+/).some((info, i) => info === 'free' && (I = i));
        return parseFloat(mem[1].split(/\s+/)[I + 1]);
      },
      loadavg: function getLoadAvg() {
        return /(\d+(?:\.\d+))\s+(\d+(?:\.\d+))\s+(\d+(?:\.\d+))/.test(
          system('cat /proc/loadavg')
        ) && [
          parseFloat(RegExp.$1),
          parseFloat(RegExp.$2),
          parseFloat(RegExp.$3)
        ];
      },
      networkInterfaces: function getInterfaceAddresses() {
        const ifaces = {};
        for (var
          lines = system('ip addr').split(/\n/),
          length = lines.length,
          i = 0; i < length;
        ) {
          let line = lines[i];
          if (/^\d+:\s+(\S+?):/.test(line)) {
            let iface = [], mac;
            ifaces[RegExp.$1] = iface;
            while (++i < length) {
              line = lines[i];
              switch (true) {
                case /link\/\S+\s+((?:\S{2}:)+\S{2})/.test(line):
                  mac = RegExp.$1;
                  break;
                case /inet(\d*)\s+(\S+)/.test(line):
                  let
                    ip = RegExp.$2.split('/'),
                    v = RegExp.$1 || '4'
                  ;
                  iface.push({
                    address: ip[0],
                    netmask: (v === '4' ? getIPv4Subnet : getIPv6Subnet)(ip[1]),
                    family: 'IPv' + v,
                    mac: mac,
                    internal: ip[0] === '127.0.0.1'
                  });
                  break;
              }
              if (iface.length === 2) break;
            }
          } else {
            ++i;
          }
        }
        return ifaces;
      },
      totalmem: function getTotalMem() {
        let I, mem = system('free -b').split(EOL);
        mem[0].split(/\s+/).some((info, i) => info === 'total' && (I = i));
        return parseFloat(mem[1].split(/\s+/)[I + 1]);
      },
      uptime: function getUptime() {
        return (
          Date.now() -
          Date.parse(system('uptime -s').replace(' ', 'T'))
        ) / 1000;
      }
    }
  },
  // current platform helpers
  op = multiOp[process.platform]
;

function getIPv4Subnet(mask) {
  const
    str = (Array(parseInt(mask) + 1).join('1') + IPV4SN).slice(0, 32),
    out = Array(4)
  ;
  for (let i = 0, j = 0; i < 32; i += 8) {
    out[j++] = parseInt(str.substr(i, 8), 2);
  }
  return out.join('.');
}

function getIPv6Subnet(mask) {
  const
    str = (Array(parseInt(mask) + 1).join('1') + IPV6SN).slice(0, 128),
    out = Array(8)
  ;
  for (let i = 0, j = 0; i < 128; i += 16) {
    out[j++] = parseInt(str.substr(i, 16), 2).toString(16);
  }
  return out.join(':');
}

module.exports = {
  arch: function arch() {
    switch (system('uname -m')) {
      case 'x86_64': return 'x64';
      case 'i686': return 'ia32';
      default: return 'arm';
    }
  },
  cpus: op.cpus,
  endianness: function endianness() {
    // absolutely random untrustable check
    // just assume LE is OK, the rest who knows
    switch (process.platform) {
      case 'sunos': return 'BE';
      default: return 'LE';
    }
  },
  freemem: op.freemem,
  homedir: function getHomeDirectory() {
    return GLib.get_home_dir();
  },
  hostname: function getHostname() {
    return GLib.get_host_name();
  },
  loadavg: op.loadavg,
  networkInterfaces: op.networkInterfaces,
  platform: function platform() {
    return process.platform;
  },
  release: function getOSRelease() {
    return system('uname -r');
  },
  tmpdir: function tmpdir() {
    return GLib.get_tmp_dir();
  },
  tmpDir: function tmpDir() {
    return GLib.get_tmp_dir();
  },
  totalmem: op.totalmem,
  type: function getOSType() {
    return system('uname');
  },
  uptime: op.uptime,
  EOL: EOL
};
