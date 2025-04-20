function datetime()
{
  let dt = new Date();
  let date = ("0" + dt.getDate());
  let month = dt.getMonth();
  let year = dt.getFullYear();
  let hour = dt.getHours();
  let minutes = dt.getMinutes();
  let seconds = dt.getSeconds();
  
  var output = year + "-" + month + "-" + date + "-" + hour + "-" + minutes + "-" + seconds;
  return output;
}
module.exports={datetime};  
  
