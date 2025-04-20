var http=require('http');
var dt = require('./assign27a');
http.createServer(function(req,res)
{
  res.writeHead(200,{'Content-type':'text/html'});
  var result=dt.datetime();
  res.write("the current date and time");
  res.write(result);
  res.end();
}).listen(8000);
  
