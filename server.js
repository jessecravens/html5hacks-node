
function start() {	
	
	var sys = require('sys'),
	// 3rd Party Libraries
	express = require('express')
	
	// Express app
	app = express.createServer(express.logger());
	
	var port = process.env.PORT || 3232;
		app.listen(port, function() {
  		console.log("Listening on " + port);
	});
	
	app.configure(function(){
		app.set('view engine', 'jade');
		app.set('views', __dirname + '/views');
		app.set('view options', {
		  layout: false
		});
 	});
	
	// app.get('/', function(request, response) {
	// 	response.send('html5hacks-node');
	// });
		
	app.get('/', function(req, res){
		console.info('hello');
		res.render('index.jade');
	  });


 	console.log("Server started.");
	}; 
	

exports.start = start;