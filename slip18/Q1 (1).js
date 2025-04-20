function sendingRequest(username, userId, callback){
  checkUser(username,function(response){
    if(response.error){
      document.getElementById("Welcome").innerHTML = "No User Found";
      document.getElementById("posts").innerHTML = "";
      return;
    }else{
      checkPosts(userId,function(response){
        if(response.error){
          document.getElementById("posts").innerHTML = "No posts Found";
          document.getElementById("Welcome").innerHTML = `Welcome back ${username}`;
          return;
      }else{
          document.getElementById("Welcome").innerHTML = `Welcome back ${username}`;
          document.getElementById("posts").innerHTML = `Your post: ${response.posts[0].post}`;
      }
    });
  }
});
}

function checkUser(username,callback){
  setTimeout(function(){
     if(username!=='Ashwini'){
       callback({error:true,userId:null});
     }
     else{
       callback({error:false,userId:1});
     }
   },1000);
}                   

function checkPosts(userId,callback){
  setTimeout(function(){
    if(userId ===1){
      callback({error:false,posts:[{postId:1,post:'post 1'}]});
    }
    else{
      callback({error:true,posts:null});
    }
  },500);
}

document.getElementById("login").addEventListener("click",function(){
  const usernameInput=document.getElementById("username").value;
  const userIdInput=document.getElementById("userid").value;
  if(userIdInput===""){
    sendingRequest(usernameInput,1);
  }      
  else{
    sendingRequest(usernameInput,parseInt(userIdInput));
  }
});        
              
