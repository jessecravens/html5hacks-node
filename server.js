var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("html5hacks-setup");
  response.end();
}).listen(3333);