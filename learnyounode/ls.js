var fs = require('fs');
var path = require('path');

function ls(dirname, extname, callback) {
	var result = [];
	fs.readdir(dirname, function (err, data) {
	  if (err) return callback(err);
	  for(i=0; i < data.length; i++){
		if(path.extname(data[i]) == '.' + extname)
			result.push(data[i]);
	  }
	  callback(null, result);
	}); 
}

module.exports = ls;

