var net = require('net')
//var strftime = require('strftime')
var port = process.argv[2]

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function getDate(){
	date = new Date();
	strDate = date.getFullYear() + '-' + pad(Number(date.getMonth())+1, 2) + '-' + pad(date.getDate(), 2);
	strDate += ' ' + pad(date.getHours(), 2) + ':' + pad(date.getMinutes(), 2) + '\n';
	return strDate;
}

server = net.createServer(function(socket){	
	socket.end(getDate())
})
server.listen(port)
