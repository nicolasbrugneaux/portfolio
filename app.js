var static = require('node-static');
var http = require('http');

var file = new static.Server(__dirname + '/', { gzip: true });

http.createServer(function (req, res) {
    console.log( req.url, __dirname);  
    file.serve(req, res);
}).listen( (process.env.PORT || 8888 ) );
