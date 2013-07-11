var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var read= fs.readFileSync('~/bitstarter/index.html','utf8');

var buffer = new Buffer(256);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8',read));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
