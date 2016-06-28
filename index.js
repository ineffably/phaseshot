'use strict';

var port = 8080;
var staticServer = require('node-static');
var http = require('http');

var file = new(staticServer.Server)();

http.createServer(function (req, res) {
  file.serve(req, res);

}).listen(port);

console.log('static server listening on port ' + port)