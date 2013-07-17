var express = require('express');
var fs = require('fs');
var indexContent = fs.readFileSync('index.html');
var app = express.createServer(express.logger());

console.log(indexContent.toString());
app.get('/', function(request, response) {
  response.send(indexContent.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
