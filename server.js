var express = require('express');

var app = express.createServer(express.logger());

	app.get('/', function(request, response) {
  		response.send('html5hacks-setup');
	});

	var port = process.env.PORT || 3333;
		app.listen(port, function() {
  		console.log("Listening on " + port);
	});