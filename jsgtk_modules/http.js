const
  Soup = imports.gi.Soup,
  Class = process.binding('util').Class,
  mainloop = process.binding('mainloop'),
  EventEmitter = require('events').EventEmitter,
  url = require('url'),
  http = {
    // TODO: implement all methods
    Agent: Class(EventEmitter, {
      constructor: function Agent(options) {
        EventEmitter.call(this);
        Object.assign(this, options || {});
      },
      keepAlive: false,
      keepAliveMsecs: 1000,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      get freeSockets() {
        return [];
      },
      get requests() {
        return [];
      },
      get sockets() {
        return [];
      },
      createConnection: function createConnection(options, callback) {},
      getName: function getName(options) {},
      addRequest: function addRequest() {},
      createSocket: function createSocket() {},
      removeSocket: function removeSocket() {},
      destroy: function destroy() {}
    }),
    ClientRequest: Class(EventEmitter, {
      constructor: function ClientRequest() {
        EventEmitter.call(this);
      },
      abort: function abort() {
        this.emit('abort');
      },
      end: function end(data, encoding, callback) {
        mainloop.wait();
      },
      flushHeaders: function flushHeaders() {
        
      },
      setNoDelay: function setNoDelay(noDelay) {
        
      },
      setSocketKeepAlive: function setSocketKeepAlive(enable, initialDelay) {
        
      },
      setTimeout: function setTimeout(timeout, callback) {
        
      },
      write: function write(chunk, encoding, callback) {
        
      }
    }),
    request: function request(options, callback) {
      const
        opt = typeof options === 'string' ?
          url.parse(options) : options,
        request = new Soup.Message({
          method: opt.method || 'GET',
          uri: new Soup.URI(url.format(opt))
        })
      ;
      //if (callback) {
        let asd = (response) => {
          console.log(response.response_headers);
        };
        
        request.connect('finished', asd);
        request.connect('restarted', asd);
        request.connect('starting', asd);

        request.connect('got-body', asd);
        request.connect('got-chunk', asd);
        request.connect('got-headers', asd);
        request.connect('got-informational', asd);
        request.connect('network-event', asd);
        request.connect('wrote-body', asd);
        request.connect('wrote-body-data', asd);
        request.connect('wrote-chunk', asd);
        request.connect('wrote-headers', asd);
        request.connect('wrote-informational', asd);

        request.connect('got_body', asd);
        request.connect('got_chunk', asd);
        request.connect('got_headers', asd);
        request.connect('got_informational', asd);
        request.connect('network_event', asd);
        request.connect('wrote_body', asd);
        request.connect('wrote_body_data', asd);
        request.connect('wrote_chunk', asd);
        request.connect('wrote_headers', asd);
        request.connect('wrote_informational', asd);
      //}
      //return new http.ClientRequest();
      
      mainloop.wait();
    }
  }
;

http.globalAgent = new http.Agent();

module.exports = http;