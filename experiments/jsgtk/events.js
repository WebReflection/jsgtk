(function (exports) {'use strict';

  const empty = Array.prototype;

  exports.EventEmitter = imports.jsgtk.env._.Class({
    constructor: function EventEmitter() {
      Object.defineProperty(this, '_eventEmitter', {
        configurable: true,
        value: Object.create(null)
      });
    },
    addListener: function addListener(event, listener) {
      return this.on(event, listener);
    },
    emit: function emit(event, ...args) {
      (this._eventEmitter[event] || empty).forEach(
        (listener) => listener.apply(this, args)
      );
    },
    listenerCount: function  listenerCount(event) {
      return (this._eventEmitter[event] || empty).length;
    },
    listeners: function listeners(event) {
      return (this._eventEmitter[event] || empty).slice(0);
    },
    on: function on(event, listener) {
      (this._eventEmitter[event] ||
        (this._eventEmitter[event] = [])).push(listener);
      return this;
    },
    once: function once(event, listener) {
      return this.on(event, function dropIt() {
        this.removeListener(event, dropIt);
        listener.apply(this, arguments);
      });
    },
    removeAllListeners: function removeAllListeners(event) {
      if (event) this._eventEmitter[event] = [];
      else EventEmitter.call(this);
      return this;
    },
    removeListener: function removeListener(event, listener) {
      let i = (this._eventEmitter[event] || empty).indexOf(listener);
      if (-1 < i) this._eventEmitter[event].splice(i, 1);
      return this;
    }
  });

}(this));