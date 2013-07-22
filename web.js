var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var fs = require('fs');

var buffer = new Buffer(fs.readFileSync("index.html"));

response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
