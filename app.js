
// Module Dependencies //////////////////////////////////////////////////////////
var sys = require('sys'),
    express = require('express'), 
    routes = require('./routes')

	// print out require paths
	for (var key in require.paths) {
	  if (require.paths.hasOwnProperty(key)) {
	    console.log(require.paths[key]);
	  }
	};	
		
	console.log(routes.index)
	console.log(routes.chapter1)

var app = module.exports = express.createServer();

// Configuration ////////////////////////////////////////////////////////////////
	app.configure(function(){
	  app.set('views', __dirname + '/views');
	  app.set('view engine', 'jade');
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
	  app.use(app.router);
	  app.use(express.static(__dirname + '/public'));
	});

	app.configure('development', function(){
	  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});

	app.configure('production', function(){
	  app.use(express.errorHandler()); 
	});

// Routes ////////////////////////////////////////////////////////////////////////
	app.get('/', routes.index);
	app.get('/chapter1', routes.chapter1);
	app.get('/chapter2', routes.chapter2);
	app.get('/chapter3', routes.chapter3);
	app.get('/chapter4', routes.chapter4);
	app.get('/chapter5', routes.chapter5);
	app.get('/chapter6', routes.chapter6);
	app.get('/chapter7', routes.chapter7);
	app.get('/chapter8', routes.chapter8);
	app.get('/chapter9', routes.chapter9);
															
// Listen on port 3232 ///////////////////////////////////////////////////////////
var port = process.env.PORT || 3232;
	app.listen(port, function() {
	 console.log("Express server listening on port %d in %s mode", 
				app.address().port, 
				app.settings.env
				);
	});