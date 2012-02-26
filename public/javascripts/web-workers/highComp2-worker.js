var computations = {
    
  create2Darray: function (data) {
    var r = data.rowValue;
    var c = data.colValue;

	var a = new Array(r);
	
	for (var i = 0; i < r; i++) {
	    a[i] = new Array(c);
	
	    for (var j = 0; j < c; j++) {
	        a[i][j] = "[" + i + "," + j + "]";
	    }
	}
    
    return a;
  },
  counter: 0,
  sortRandomArray: function (msg) {
    //var i = 0;
    var j; 
    var value;
    var arrLength = msg.arrayLength;
    var data = msg.data;
 
    for (j = arrLength; j > computations.counter; j--) {
        // self.postMessage(j);
        if (data[j] < data[j - 1]) {
            // self.postMessage("PROCESSING");
            value = data[j];
            data[j] = data[j - 1];
            data[j - 1] = value;
            // self.postMessage('END PROCESSING on ' + value);
        }
    }
    computations.counter ++;
    // self.postMessage({"i": computations.counter, "length": arrLength});
    
    if (computations.counter < arrLength) {
        // setTimeout(computations[msg.compfn](msg), 0);
        computations[msg.compfn](msg);
    }
    else {
        // self.postMessage("COMPLETE - data " + data);
        self.postMessage({"i": computations.counter, "length": arrLength, "data": data});
    }
  }
  
};

self.addEventListener('message', function(e) {

    var message = JSON.parse(e.data);
    
    var computated = computations[message.compfn](message);
    // self.postMessage(message);

    // hack for now
    if (computations[message.compfn] == "create2Darray") {
      self.postMessage(computated);
    }
    
}, false);