/*! (C) Andrea Giammarchi Mit Style License */
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
 */function HoldOn(e){this._cache={},this._keys=e||["values"]}(function(e,t){HoldOn.create=function(t){return new HoldOn(t)},e.add=function(t){var n=!this.has(t),r=n?[]:this._cache[t],i=this._keys.length,s=0;if(n){this._cache[t]=r;while(s<i)r[s++]=[];s=0}while(s<i)r[s].push(arguments[++s]);return n},e.get=function(t){var n={},r=this._cache[t],i=this._keys,s=i.length,o=0;while(o<s)n[i[o]]=r[o++];return n},e.has=function(n){return t.call(this._cache,n)},e.remove=function(t){var n=this.get(t);return delete this._cache[t],n}})(HoldOn.prototype,Object.prototype.hasOwnProperty);