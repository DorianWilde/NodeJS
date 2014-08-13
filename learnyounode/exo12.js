var http = require('http')
var fs = require('fs')
var map = require('through2-map')
//var strftime = require('strftime')
var port = process.argv[2]

server = http.createServer(function(request, response){	
	request.pipe(map(function (chunk) {
	  return chunk.toString().toUpperCase()
	})).pipe(response)
	})
server.listen(port)
