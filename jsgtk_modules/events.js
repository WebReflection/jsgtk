/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/events.html
 * JSGtk Status         incomplete
 */

let inherits = require('util').inherits;

function Class(parent, proto) {
  let length = arguments.length;
  if (length === 1) proto = parent;
  if (!proto.hasOwnProperty('constructor'))
    proto.constructor = function Class() {};
  if (length > 1) inherits(proto.constructor, parent);
  return Object.getOwnPropertyNames(proto).reduce(
    (p, key) => {
      let d = Object.getOwnPropertyDescriptor(proto, key);
      d.enumerable = false;
      return Object.defineProperty(p, key, d);
    },
    proto.constructor.prototype
  ).constructor;
}

module.exports = {
  EventEmitter: Class({
    constructor: function EventEmitter() {
      defineProperty(this, '_eventEmitter', {
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
  })
};