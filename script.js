const API =
"https://script.google.com/macros/s/AKfycbw8PpXQkw5I-ZGhQ1IKhvflNTJDYbuQWKUpd9FT8nUhDhtC1jCEICyU6t2TQa5B2mLO/exec";

function login(){

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

fetch(API,{

method:"POST",

body:JSON.stringify({

username:username,

password:password

})

})

.then(res=>res.json())

.then(data=>{

if(data.success){

localStorage.setItem("name",data.name);

window.location="index.html";

}else{

document.getElementById("msg").innerHTML="Invalid Login";

}

});

}
