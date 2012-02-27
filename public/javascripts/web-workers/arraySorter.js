(function ($) {

    var i, length, data, el, start;

    function sort (progressFn) {
        
      // Initialize a few things...
      length = $('select#noworker').val();
      data = [];
      el = document.getElementById("progressbar").firstChild;

      // Setup an array of random integers...
      for (i = 0; i < length; i++) {
        data[i] = Math.floor(Math.random() * length);
      }

        console.log('---------------------- sort');
        console.log(data);
        i = 0;

        (function () {
            var j, value;

            for (j = length; j > i; j--) {
                // console.log(j);
                if (data[j] < data[j - 1]) {
                    // console.log('PROCESSING');
                    value = data[j];
                    data[j] = data[j - 1];
                    data[j - 1] = value;
                    // console.log('END PROCESSING on ' + value);
                }
            }

            i++;
            progressFn(i, length);

            if (i < length) {
                setTimeout(arguments.callee, 0);
            }
            else{
                console.log(data);
            }

        })();
    }
    
    function sortWithWorker (progressFn) {
        
      // Initialize a few things...
      var length = $('select#work').val();
      data = [];
      el = document.getElementById("progressbar").firstChild;

      // Setup an array of random integers...
      for (i = 0; i < length; i++) {
        data[i] = Math.floor(Math.random() * length);
      }

        (function () {
            console.log('---------------------- sortWithWorker');
            console.log(data);
            
            var worker = new Worker('javascripts/web-workers/arraySorter-worker.js');
            
            var message = {
                "compfn": "sortRandomArray",
                "data": data,
                "arrayLength": length
			};
            
            worker.postMessage(JSON.stringify(message)); 
            worker.onmessage = function (event) { 
                var data = event.data;
                console.log(data.data);
                progressFn(data.i, data.length);  
            };

        })();
    }
    
    $('#noworker').change(function() {
        
        start = new Date().getTime();
        
        sort(function (value, total) {
            
            el.style.width = (100 * value / total) + "%";
            if (value >= total) {
                console.log("Total duration: " + ((new Date().getTime() - start) / 1000) + " seconds");
            }
        });
    });
    
    $('#work').change(function() {
        
        console.log('test');      
         start = new Date().getTime();
 
         sortWithWorker(function (value, total) {
            
            el.style.width = (100 * value / total) + "%";
            if (value >= total) {
                console.log("Total duration: " + ((new Date().getTime() - start) / 1000) + " seconds");
            }
        });
    });
    
})(jQuery);