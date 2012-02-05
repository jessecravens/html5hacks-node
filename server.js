
function start() {	
	
	var sys = require('sys'),

	// 3rd Party Libraries
	express = require('express'),
	io = require('socket.io'),
	sty = require('sty/lib/sty'),
	jade = require('jade/lib/jade'),
	express = require('express/lib/express'),
	jsdom = require("jsdom/lib/jsdom"),
	mongoose = require('mongoose'),

	app = express.createServer(express.logger());

		app.get('/', function(request, response) {
	  		response.send('html5hacks-node');
		});

		var port = process.env.PORT || 3232;
			app.listen(port, function() {
	  		console.log("Listening on " + port);
		});
	
	 	console.log("Server started.");
	}; 
	
	

exports.start = start;