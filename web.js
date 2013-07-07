var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
    var indexFile = fs.readFileSync('./index.html');
    var buffer = new Buffer(indexFile, 'utf-8');
    response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
