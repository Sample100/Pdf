const {Client}=require('pg');
var fs=require('fs');
const client=new Client({
  user:'ty100',
  host:'192.168.1.252',
  password:'ty100',
  database:'ty100'
});
client.connect((err) => {
  if(err) {
    console.error('Error connecting to database: ',err);
    return;
  }
  console.log("connected to database");
 
    client.query('SELECT * FROM customers WHERE name LIKE 'A%';',(err,result)=> {
      if(err){
        console.error('Error execution query:',err);
        return;
      }
      console.log(result.rows);  
});     
});
});   
