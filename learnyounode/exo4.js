var fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err;
  answer = Number(data.toString().split("\n").length)-1;
  console.log(answer);
});
