

var fs =require("fs");
var http = require('http');
var path = require('path');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
//   response.end('Hello World');
  if (request.method === 'GET'){
      var fileUrl;

      if (request.url=='/')
      fileUrl = '/index.html'
      else
      fileUrl = request.url;
      
      var filePath = path.resolve('./public'+fileUrl);
      fs.exists(filePath,(kiemtra)=>{
        if (!kiemtra){
          response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('Erorr 404');
        
        }
        else{
          response.writeHead(200, {'Content-Type': 'text/html'});
          fs.createReadStream(filePath).pipe(response)
        }
      })
      // fs.createReadStream(filePath).pipe(response)
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');