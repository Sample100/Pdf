var fs=require('fs');
fs.readFile('f1.txt',function(err,data)
{
  fs.appendFile('f2.txt',data.toString(),function(err)
  {
  });
  fs.readFile('f2.txt',function(err,data)
  {
    console.log(data.toString())
  });
});    
