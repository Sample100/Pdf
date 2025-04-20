var http=require('http');
var server=http.createServer(function(req,res)
{
  if(req.url=='/')
  {
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write('<html><body><p> This is home page</p></body></html>');
     res.end();
  }
  else if(req.url=='/admin')
  {
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write('<html><body><p> This is admin page</p></body></html>');
     res.end();
  }
  else if(req.url=='/student')
  {
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write('<html><body><p> This is student page</p></body></html>');
     res.end();
  } 
  else
  {
     res.end('Invalid request');
  }
});
server.listen(8000);
console.log("server is running in port no 8000");         
