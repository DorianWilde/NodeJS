var http = require('http')
var fs = require('fs')
//var strftime = require('strftime')
var port = process.argv[2]
var filePath = process.argv[3]

server = http.createServer(function(request, response){	
	var stream = fs.createReadStream(filePath)
	stream.pipe(response)
})
server.listen(port)
