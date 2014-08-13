var ls = require('./ls');

ls(process.argv[2], process.argv[3], function (err, data) {
	if (err) throw err;
	data.forEach(function(entry) {
		console.log(entry);
	});
  }
 );