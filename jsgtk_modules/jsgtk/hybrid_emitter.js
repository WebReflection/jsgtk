// TODO:  is there a better way to know if
//        this is a native listener or not?

const
  defineProperties = Object.defineProperties,
  weakEmitters = new WeakMap,
  descriptors = {
    addListener: {value: addListener},
    emit: {value: null},
    on: {value: addListener},
    once: {value: function once(type, handler) {
      let tmp = function () {
        removeListener.call(this, type, tmp);
        handler.apply(this, arguments);
      }.bind(this);
      return addListener.call(this, type, tmp);
    }},
    removeListener: {value: removeListener}
  }
;

function addListener(type, handler) {
  let info = weakEmitters.get(this);
  if (!info) weakEmitters.set(this, info = Object.create(null));
  let
    tinfo = info[type] || (info[type] = {k: [], v: []}),
    i = tinfo.k.indexOf(handler)
  ;
  if (i < 0) {
    i = tinfo.k.push(handler) - 1;
    tinfo.v[i] = addListenerNative.call(this, type, handler);
  }
  global.LASTFN = handler;
  return this;
}

function addListenerNative(type, handler) {
  try {
    // dunno how signals work so ...
    return this.connect(type, handler);
  } catch(meh) {
    // if it fails gonna be less than Infinity
    return Infinity;
  }
}

function emitUser(type, ...args) {
  let info = weakEmitters.get(this);
  if (!info) return false;
  let tinfo = info[type];
  if (!tinfo) return false;
  tinfo.k.forEach(fn => fn.apply(this, args));
  return true;
}

function removeListener(type, handler) {
  let info = weakEmitters.get(this);
  if (!info) return this;
  let tinfo = info[type];
  if (!tinfo) return this;
  let i = tinfo.k.indexOf(handler);
  if (i < 0) return this;
  let signal = tinfo.v[i];
  if (signal < Infinity) this.disconnect(signal);
  tinfo.k.splice(i, 1);
  tinfo.v.splice(i, 1);
  if (tinfo.k.length < 1) delete info[type];
  return this;
}

this.augment = function (proto) {
  const $emit = proto.emit;
  descriptors.emit.value = $emit ?
    function emit() {
      try {
        $emit.apply(this, arguments);
        return true;
      } catch(meh) {
        return emitUser.apply(this, arguments);
      }
    } :
    emitUser
  ;
  defineProperties(proto, descriptors);
};