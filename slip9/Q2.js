const http=require('http');
const fs=require('fs');
const port=3000;
http.createServer((req,res) =>
{
  const filePath='./f3.txt';
  console.log('Request for file :$(filePath}');
  fs.readFile(filePath,(err,date) =>
  {
    if(err)
    {
      res.writeHead(404,{'Content-type':'text/plain'});
      res.end("404 error: File Not found");
    }
    else
    {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(data);
    
  }  
  });
}).listen(port,() => {
  console.log('Server running at http://localhost:${port}');
  });    
