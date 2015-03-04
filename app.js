var http = require('http');
// var path = require('path');
// var url = require('url');
// var fs = require('fs');
var ecstatic = require('ecstatic')({root: __dirname + '/public'});

////////////
// SERVER //
///////////
http.createServer(function (req, res) {
	ecstatic(req,res);
}).listen(process.env.PORT || 9000);
 
var currentPort = process.env.PORT || 9000;
console.log('Server running on port '+currentPort);
