	
	function start() {	

		var sys = require('sys'),

		// 3rd Party Libraries
		express = require('express')

		app = express.createServer(express.logger());

			app.get('/', function(request, response) {
		  		response.send('html5hacks-node');
			});

			var port = process.env.PORT || 3333;
				app.listen(port, function() {
		  		console.log("Listening on " + port);
			});


	exports.start = start;