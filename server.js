
function start() {	
	
	var sys = require('sys'),
	// 3rd Party Libraries
	express = require('express')
	// jade = require('jade')
	
	// Express app
	app = express.createServer(express.logger());
	
	var port = process.env.PORT || 3232;
		app.listen(port, function() {
  		console.log("Listening on " + port);
	});
	
	// app.configure(function(){
	//     app.use(express.methodOverride());
	//     app.use(express.bodyParser());
	//     app.use(app.router);
	// 	app.set('view engine', 'jade');
	// 	app.set('views', __dirname + '/views');
	// 	app.set('view options', {
	// 	  layout: false
	// 	});
	// });
	// 
	// app.configure('development', function(){
	//     app.use(express.static(__dirname + '/public'));
	//     app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	// });
	// 
	// app.configure('production', function(){
	//   var oneYear = 31557600000;
	//   app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
	//   app.use(express.errorHandler());
	// });
	
	app.get('/', function(request, response) {
		response.send('html5hacks-node');
	});
		
	// app.get('/', function(req, res){
	// 	console.info('hello');
	// 	res.render('index.jade');
	// });


 	console.log("Server started.");
	}; 
	

exports.start = start;