const {Client}=require('pg');
var fs=require('fs');
const client=new Client({
  user:'ty100',
  host:'192.168.1.252',
  password:'ty100',
  database:'Movie'
});
client.connect(function(err){
  if(err) throw err;
    console.log("connected");
    var pgsql="CREATE TABLE MOVIE(NAME VARCHAR(255), ADDRESS VARCHAR(255))";
    client.query(pgsql,function(err,result)
    {
      if(err) throw err;
      console.log("Table created");
    });
});        
