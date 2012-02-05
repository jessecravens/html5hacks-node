	
	function start() {	

		var sys = require('sys'),

		// 3rd Party Libraries
		express = require('express'),
		jade = require('jade')

			app = express.createServer(express.logger());
	
			app.configure(function(){
			    app.use(express.methodOverride());
			    app.use(express.bodyParser());
			    app.use(app.router);
				app.set('view engine', 'jade');
				app.set('views', __dirname + '/views');
				app.set('view options', {
				  layout: false
				});
			});

			// app.get('/', function(request, response) {
			// 		  		response.send('html5hacks-node');
			// });
			
			app.get('/', function(req, res){
				console.info('hello');
				res.render('index.jade');
			});		

			var port = process.env.PORT || 3232;
				app.listen(port, function() {
		  		console.log("Listening on " + port);
			});
	};

	exports.start = start;