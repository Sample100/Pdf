const express = require('express');
const app = express();
const PORT = 8000;
app.get('/',function(req,res)
{
  res.download('f1.txt');
});
app.listen(PORT,function(err)
{
  if(err)
    console.log(err);
  console.log("server listening port no 8000");
});      
