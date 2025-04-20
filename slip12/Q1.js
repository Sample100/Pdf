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
  const pgsql="INSERT INTO CUSTOMER5(NAME,ADDRESS)VALUES($1,$2),($3,$4),($5,$6),($7,$8),($9,$10)";
  const values=['Tejal','nashik','sabina','nashik','pratiksha','pune','manali','mumbai','prachi','pune'];
  client.query(pgsql,values,(err,result)=>{
    if(err){
      console.error('Error executing query:',err);
      return;
    }
    console.log('Insertion successful');
    client.query('SELECT * FROM CUSTOMER5',(err,result)=> {
      if(err){
        console.error('Error execution query:',err);
        return;
      }
      console.log(result.rows);  
});     
});
});   
