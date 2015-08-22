/*
// program with a helo world text 
var http = require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text/plain"});
	res.end("Hello World");
}).listen(8081,"127.0.0.1");
console.log("Serevr is started on 127.0.0.1"); */


// program to read the content from file & displays that on to a page.
var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	fs.readFile("index.html",function(err,data){
		res.writeHead(200,{"content-type":"text/html"});
		res.end(data);
	})
}).listen(8081,"127.0.0.1");
console.log("server started on 127.0.0.1");