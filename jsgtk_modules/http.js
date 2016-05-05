/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/http.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports, print */

const
  Soup = imports.gi.Soup,
  DEBUG = process.binding('constants').DEBUG,
  Class = process.binding('util').Class,
  mainloop = process.binding('mainloop'),
  Buffer = require('buffer').Buffer,
  EventEmitter = require('events').EventEmitter,
  url = require('url'),
  hOP = Object.prototype.hasOwnProperty,
  http = {
    METHODS: [
      'ACL',
      'BIND',
      'CHECKOUT',
      'CONNECT',
      'COPY',
      'DELETE',
      'GET',
      'HEAD',
      'LINK',
      'LOCK',
      'M-SEARCH',
      'MERGE',
      'MKACTIVITY',
      'MKCALENDAR',
      'MKCOL',
      'MOVE',
      'NOTIFY',
      'OPTIONS',
      'PATCH',
      'POST',
      'PROPFIND',
      'PROPPATCH',
      'PURGE',
      'PUT',
      'REBIND',
      'REPORT',
      'SEARCH',
      'SUBSCRIBE',
      'TRACE',
      'UNBIND',
      'UNLINK',
      'UNLOCK',
      'UNSUBSCRIBE'
    ],
    STATUS_CODES: {
      '100': 'Continue',
      '101': 'Switching Protocols',
      '102': 'Processing',
      '200': 'OK',
      '201': 'Created',
      '202': 'Accepted',
      '203': 'Non-Authoritative Information',
      '204': 'No Content',
      '205': 'Reset Content',
      '206': 'Partial Content',
      '207': 'Multi-Status',
      '208': 'Already Reported',
      '226': 'IM Used',
      '300': 'Multiple Choices',
      '301': 'Moved Permanently',
      '302': 'Found',
      '303': 'See Other',
      '304': 'Not Modified',
      '305': 'Use Proxy',
      '307': 'Temporary Redirect',
      '308': 'Permanent Redirect',
      '400': 'Bad Request',
      '401': 'Unauthorized',
      '402': 'Payment Required',
      '403': 'Forbidden',
      '404': 'Not Found',
      '405': 'Method Not Allowed',
      '406': 'Not Acceptable',
      '407': 'Proxy Authentication Required',
      '408': 'Request Timeout',
      '409': 'Conflict',
      '410': 'Gone',
      '411': 'Length Required',
      '412': 'Precondition Failed',
      '413': 'Payload Too Large',
      '414': 'URI Too Long',
      '415': 'Unsupported Media Type',
      '416': 'Range Not Satisfiable',
      '417': 'Expectation Failed',
      '418': 'I\'m a teapot',
      '421': 'Misdirected Request',
      '422': 'Unprocessable Entity',
      '423': 'Locked',
      '424': 'Failed Dependency',
      '425': 'Unordered Collection',
      '426': 'Upgrade Required',
      '428': 'Precondition Required',
      '429': 'Too Many Requests',
      '431': 'Request Header Fields Too Large',
      '451': 'Unavailable For Legal Reasons',
      '500': 'Internal Server Error',
      '501': 'Not Implemented',
      '502': 'Bad Gateway',
      '503': 'Service Unavailable',
      '504': 'Gateway Timeout',
      '505': 'HTTP Version Not Supported',
      '506': 'Variant Also Negotiates',
      '507': 'Insufficient Storage',
      '508': 'Loop Detected',
      '509': 'Bandwidth Limit Exceeded',
      '510': 'Not Extended',
      '511': 'Network Authentication Required'
    },
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
    IncomingMessage: Class(EventEmitter, {
      constructor: function IncomingMessage(method, url) {
        this.encoding = this.defaultEncoding;
        this.method = method;
        this.url = url;
        this.statusCode = 0;
        this.statusMessage = '';
        this.headers = {};
        this.rawHeaders = [];
        this.readable = false;
      },
      setEncoding: function (encoding) {
        this.encoding = encoding;
      },
      defaultEncoding: 'utf8',
      resume: function resume() {
        console.warn('resume not implemented yet');
      }
    }),
    ClientRequest: Class(EventEmitter, {
      constructor: function ClientRequest(options, callback) {
        const dfltopt = {
          headers: {},
          agent: http.globalAgent
        };
        EventEmitter.call(this);
        this.chunks = [];
        if (typeof options === 'string') {
          this.options = Object.assign(
            dfltopt,
            url.parse(options, true)
          );
        } else {
          this.options = Object.assign(
            dfltopt,
            options
          );
          if (!hOP.call(options, 'protocol'))
            this.options.protocol = options.protocol || 'http:';
          if (!hOP.call(options, 'host') && !hOP.call(options, 'hostname'))
            this.options.hostname = 'localhost';
          if (hOP.call(options, 'path')) {
            let path = options.path.split('?');
            this.options.pathname = path[0] || '/';
            let search = path.slice(1).join('?');
            if (search.length) this.options.search = search;
          }
        }
        if (
          hOP.call(this.options, 'auth') && this.options.auth &&
          !hOP.call(this.options.headers, 'Authorization')
        ) {
          this.options.headers.Authorization = 'Basic '.concat(
            new Buffer(options.auth).toString('base64')
          );
          delete this.options.auth;
        }
        if (callback) this.on('response', callback);
      },
      abort: function abort() {
        this.emit('abort');
      },
      // TODO: cleanup this mess
      end: function end(data, encoding, callback) {
        const
          method = this.options.method || 'GET',
          uri = url.format(this.options),
          session = new Soup.SessionAsync(),
          message = Soup.Message.new(method, uri),
          headers = Object.keys(this.options.headers),
          im = new http.IncomingMessage(method, uri),
          emitError = (e) => setTimeout(
            () => this.emit('error', e),
            33
          ),
          notifyReadable = () => {
            if (notReadable) {
              notReadable = false;
              im.readable = true;
              im.emit('readable');
            }
          }
        ;

        let
          hasConnection = false,
          hasHost = false,
          started = false,
          notReadable = true,
          finished
        ;

        // show all events
        if (DEBUG) {
          [
            'network-event',
            'restarted',
            'starting',
            'wrote-headers',
            'wrote-body',
            'got-headers',
            'got-chunk',
            'got-body',
            'got-informational',
            'wrote-body-data',
            'wrote-chunk',
            'wrote-informational',
            'finished'
          ].forEach(
            type => message.connect(type, (...args) => print(type))
          );
        }

        // in case the configuration fails
        // emit an error in a non blocking way
        try {
          Soup.Session.prototype.add_feature.call(
            session,
            new Soup.ProxyResolverDefault()
          );
          headers.forEach(key => {
            if (key === 'Connection' || key === 'connection') {
              hasConnection = true;
            }
            if (key === 'Host' || key === 'host') {
              hasHost = true;
            }
            Array.prototype.concat(this.options.headers[key]).forEach(value => {
              message.request_headers.append(key, String(value));
            });
          });
          if (!hasHost) message.request_headers.append(
            'Host',
            this.options.host || this.options.hostname
          );
          if (!hasConnection) message.request_headers.append(
            'Connection',
            this.options.agent.keepAlive ? 'keep-alive' : 'close'
          );
        } catch(e) {
          return emitError(e), this;
        }

       message.connect('starting', () => started = true);

        // do not follow through redirects
        message.connect('restarted', (message) => {
          session.cancel_message(message, im.statusCode);
        });

        message.connect('got-headers', (message) => {
          im.statusCode = message.status_code;
          im.statusMessage = message.reason_phrase;
          message.response_headers.foreach((name, value) => {
            im.rawHeaders.push(name, value);
            name = name.toLowerCase();
            if (name === 'set-cookie' || hOP.call(im.headers, name)) {
              im.headers[name] = [].concat(
                typeof im.headers[name] === 'string' ?
                  im.headers[name] : [],
                value
              );
            } else {
              im.headers[name] = value;
            }
          });
          this.emit('response', im);
        });

        message.connect('got-chunk', (message, chunk) => {
          const data = chunk.get_data();
          notifyReadable();
          im.emit('data', this.encoding === this.defaultEncoding ?
            data : new Buffer(data, this.encoding));
        });

        if (this.chunks.length) {
          message.connect('wrote-headers', () => {
            this.chunks.forEach(chunk => {
              message.request_body.append(chunk);
            });
          });
        }

        finished = message.connect('finished', () => {
          im.emit('end');
        });

        this.once('abort', () => {
          message.disconnect(finished);
          session.cancel_message(message, im.statusCode || 200);
          if (started)
            emitError({message: 'socket hang up'});
        });

        session.queue_message(message, (session, message) => {
          mainloop.go();
        });
        mainloop.wait();
        return this;
      },
      flushHeaders: function flushHeaders() {
        console.warn('flushHeaders not implemented yet');
      },
      setNoDelay: function setNoDelay(noDelay) {
        console.warn('setNoDelay not implemented yet');
      },
      setSocketKeepAlive: function setSocketKeepAlive(enable, initialDelay) {
        console.warn('setSocketKeepAlive not implemented yet');
      },
      setTimeout: function setTimeout(timeout, callback) {
        console.warn('setTimeout not implemented yet');
      },
      write: function write(chunk, encoding, callback) {
        this.chunks.push(
          typeof encoding === 'string' ?
            new Buffer(chunk, encoding) :
            chunk
        );
      }
    }),
    request: function request(options, callback) {
      return new http.ClientRequest(options, callback);
    },
    get: function (options, callback) {
      return http.request(options, callback).end();
    }
  }
;

http.globalAgent = new http.Agent();

module.exports = http;