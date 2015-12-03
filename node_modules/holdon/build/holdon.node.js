/*!
Copyright (C) 2014 by Andrea Giammarchi

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
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
module.exports = HoldOn;

/**
 * Create a new instance able to hold 1 to N properties
 * @constructor
 * @param   Array   optional list of keys.
 *                  by default will store just values
 *
 * @example
 *  var cache = new HoldOn(['request', 'response']);
 *  http.createServer(function (req, res) {
 *    if (cache.add(req.url, req, res)) {
 *      // do something asynchronously
 *      // then once it's done ...
 *      setTimeout(function () {
 *        var group = cache.remove(req.url);
 *        // new requests will be queued in a new space
 *        // we can at least answer to these now
 *        group.response.forEach(function (response) {
 *          response.writeHead(200, {'Content-Type': 'text/plain'});
 *          response.end('Thank you for waiting\n');
 *        });
 *      }, 1000);
 *    }
 *  }).listen(port, ip);
 */
function HoldOn(keys) {
  this._cache = {};
  this._keys = keys || ['values'];
}

(function (HoldOnPrototype, hOP) {

  // @public static
  // @factory
  HoldOn.create = function create(keys) {
    return new HoldOn(keys);
  };

  // @public prototype
  /**
   * Add one or more values related to a unique id
   * @param     string  unique id to hold on
   * @param     any     one or more values to add per key
   * @return    boolean true if it's a new cache entry,
   *                    false if the id was already known
   * @example
   *    var o = HoldOn.create(['name', 'age']);
   *    var groupKey = Math.random();
   *    o.add(groupKey, 'Andrea', 36); // first time: true
   *    o.add(groupKey, 'Luca', 33);   // any other: false
   */
  HoldOnPrototype.add = function add(id) {
    var
      isNew = !this.has(id),
      list = isNew ? [] : this._cache[id],
      length = this._keys.length,
      i = 0
    ;
    if (isNew) {
      this._cache[id] = list;
      while (i < length) list[i++] = [];
      i = 0;
    }
    while (i < length) list[i].push(arguments[++i]);
    return isNew;
  };

  /**
   * Get values stored per unique id
   * @param     string  unique id to hold on
   * @return    Object  an object with keys
   *                    and a list of values per key
   * @example
   *    var o = HoldOn.create(['name', 'age']);
   *    var groupKey = Math.random();
   *    o.add(groupKey, 'Andrea', 36);
   *    o.add(groupKey, 'Luca', 33);
   *    o.get(groupKey);
   *    {name:['Andrea','Luca'],age:[36,33]}
   */
  HoldOnPrototype.get = function get(id) {
    var
      object = {},
      list = this._cache[id],
      keys = this._keys,
      length = keys.length,
      i = 0
    ;
    while (i < length) object[keys[i]] = list[i++];
    return object;
  };

  /**
   * Check if a unique-id has been set or not
   * @param     string  unique id to check
   * @return    boolean true if present on cache, false otherwise
   * @example
   *    var o = HoldOn.create(['name', 'age']);
   *    var groupKey = Math.random();
   *    o.has(groupKey); // false
   *    o.add(groupKey, 'Luca', 33);
   *    o.has(groupKey); // true
   */
  HoldOnPrototype.has = function has(id) {
    return hOP.call(this._cache, id);
  };

  /**
   * Remove a unique id from the cache
   * and return its content
   * @param String  unique id to check
   * @example
   *    var o = HoldOn.create(['name', 'age']);
   *    var groupKey = Math.random();
   *    o.add(groupKey, 'Andrea', 36);
   *    o.remove(groupKey);
   *    {name:['Andrea'],age:[36]}
   *    o.has(groupKey); // false
   */
  HoldOnPrototype.remove = function remove(id) {
    var object = this.get(id);
    delete this._cache[id];
    return object;
  };

}(HoldOn.prototype, Object.prototype.hasOwnProperty));