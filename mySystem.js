var os = require('os');
var http = require('http');

console.log("Here is the info about system on this program runs");
var sysArray = 	[
					'Host Name : '+ os.hostname(),
					'Load Average : '+ os.loadavg(),
					'Uptime : '+ os.uptime(),
					'free Memory : '+ os.freemem(),
					'Total Memory : '+ os.totalmem(),
					'CPU : '+ os.cpus(),
					'Type : '+ os.type(),
					'Release : '+ os.release(),
					'networkinterfaces : '+ os.networkInterfaces(),
					'arch : '+ os.arch(),
					'platform : '+ os.platform(),
					'tmpDir : '+ os.tmpDir()
				];

//console.log(sysArray);

http.createServer(function(req,res){
	res.writeHead(200,{'content-type':"text/html"});
	console.log(sysArray);
	res.write("Here is the info about system on this program runs");
	for(var i=0;i<sysArray.length;i++) {
		res.write(sysArray[i]);
	}
	res.end('end');
}).listen(8024,'127.0.0.1');