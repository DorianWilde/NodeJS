var bl = require('bl');
var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var count = 0;
var results = [];

function queue(i){
	http.get(urls[i], function(response){
		response.setEncoding('utf8');
		response.pipe(bl(function (err, data) { 
			if (err)throw err;
			results[i] = data.toString();
			count++;
			if(count>2){
				results.forEach(function(entry) {
					console.log(entry);
				});
			}
		}));
	});
}

for(i=0; i < urls.length; i++){
	queue(i);
}

