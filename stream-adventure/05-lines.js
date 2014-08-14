var split = require('split')
var through = require('through')
var i = 1
var tr = through(write)
function write(buf){
	if(i == 0){
		this.queue(buf.toString().toUpperCase() + '\n')
		i++
	} else {
		this.queue(buf.toString().toLowerCase()+ '\n')
		i=0
	}
}
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)