var http = require('http')
var map = require('through2-map')
var url = require('url')
//var strftime = require('strftime')
var port = process.argv[2]

server = http.createServer(function(request, response){	
	response.writeHead(200, { 'Content-Type': 'application/json' })
	urlObj = url.parse(request.url, true)
	var date = new Date(urlObj.query.iso)
	if(urlObj.pathname == '/api/parsetime') var toPrint = {hour:date.getHours(), minute:date.getMinutes(), second:date.getSeconds()}
	if(urlObj.pathname == '/api/unixtime') var toPrint = {unixtime:date.getTime()}

	response.end(JSON.stringify(toPrint));
	})
server.listen(port)
