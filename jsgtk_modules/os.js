/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/os.html
 * JSGtk Status         incomplete
 */

// TODO: this module is mostly based on synchronous CLI calls
//       not only it's not portable as it is but there is
//       surely a better way of doing this.

const
  GLib = imports.gi.GLib,
  trim = String.prototype.trim
;

function iExecSync(command) {
  return trim.call(GLib.spawn_command_line_sync(command)[1]);
}

module.exports = {
  hostname: function getHostname() {
    return GLib.get_host_name();
  },
  loadavg: function getLoadAvg() {
    return /(\d+(?:\.\d+))\s+(\d+(?:\.\d+))\s+(\d+(?:\.\d+))/.test(
      iExecSync('cat /proc/loadavg')
    ) && [
      parseFloat(RegExp.$1),
      parseFloat(RegExp.$2),
      parseFloat(RegExp.$3)
    ];
  },
  uptime: function getUptime() {
    return (
      new Date -
      Date.parse(iExecSync('uptime -s').replace(' ', 'T'))
    ) / 1000;
  },
  freemem: function getFreeMem() {
    let I, mem = iExecSync('free -b').split(os.EOL);
    mem[0].split(/\s+/).some((info, i) => info === 'free' && (I = i));
    return parseFloat(mem[1].split(/\s+/)[I + 1]);
  },
  totalmem: function getTotalMem() {
    let I, mem = iExecSync('free -b').split(os.EOL);
    mem[0].split(/\s+/).some((info, i) => info === 'total' && (I = i));
    return parseFloat(mem[1].split(/\s+/)[I + 1]);
  },
  cpus: function getCPUs() {
    let
      PROCESSOR = /^processor\s*:\s*(\d+)/i,
      NAME = /^model[\s_]+name\s*:([^\r\n]+)/i,
      FREQ = /^cpu[\s_]+MHz\s*:\s*(\d+)/i,
      cpus = [],
      cpu
    ;
    iExecSync('cat /proc/cpuinfo').split(/\r\n|\n|\r/).forEach((line) => {
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
  type: function getOSType() {
    return iExecSync('uname');
  },
  release: function getOSRelease() {
    return iExecSync('uname -r');
  },
  networkInterfaces: function getInterfaceAddresses() {

  },
  homedir: function getHomeDirectory() {
    return GLib.get_home_dir();
  },
  arch: function arch() {
    switch (iExecSync('uname -m')) {
      case 'x86_64': return 'x64';
      case 'i686': return 'ia32';
      default: return 'arm';
    }
  },
  platform: function platform() {
    return PLATFORM;
  },
  tmpdir: function tmpdir() {
    return GLib.get_tmp_dir();
  },
  tmpDir: function tmpDir() {
    return GLib.get_tmp_dir();
  },
  EOL: PLATFORM === 'win32' ? '\r\n' : '\n',
  endianness: function endianness() {
    // absolutely random untrustable check
    // just assume LE is OK, the rest who knows
    switch (PLATFORM) {
      case 'sunos': return 'BE';
      default: return 'LE';
    }
  }
};