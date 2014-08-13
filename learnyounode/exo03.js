var fs = require('fs');
var answer = Number(fs.readFileSync(process.argv[2]).toString().split("\n").length)-1;
console.log(answer);