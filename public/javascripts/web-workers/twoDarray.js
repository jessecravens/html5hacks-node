    function process() {
        
        // NOT USING A WEB WORKER
        if ($('select#worker').val() == "no"){
            
            // start animating to the right
            goRight();
            var r = $('select#row').val();
		    var c = $('select#col').val();
        
            // console.log(r);
		    var a = new Array(r);

		    for (var i = 0; i < r; i++) {
		        a[i] = new Array(c);

		        for (var j = 0; j < c; j++) {
		            a[i][j] = "[" + i + "," + j + "]";
		        }
		    }
        
            $('#result').modal();
        
            //print results of array in result div
            $('#results').text(a.toString());
            
        // USE A WEB WORKER    
        }else{
            
            // start animating to the right
            goRight();
            var r = $('select#row').val();
    	    var c = $('select#col').val();
            
            var worker = new Worker('javascripts/web-workers/twoDarray-worker.js');
            
            var message = {
				"compfn": "create2Darray",
                "rowValue": r,
                "colValue": c
			  }
                          
            worker.postMessage(JSON.stringify(message)); 
           
            worker.onmessage = function (event) {
	     	    // print results of array in result div
                var data = event.data 
                //open the modal
                $('#result').modal();
                
                // Must stringify before appending to DOM
                $('#results').text(JSON.stringify(data));

	   	    };
        }
    }

    function goRight() {
        // set box initial position to 0px
        $("div#box").css("left","0px");
        $("div#box").animate({"left": "+=1400px"}, 5000);
	}

	function init() {
        $('#col').change(function() {
            process();
        });

        $('#row').change(function() {
            process();  
        });
	}
    
	window.onload = init;