const API =
"https://script.google.com/macros/s/AKfycbzHeemx2fV0TcrhX-8oS2Vj_bNqCy_beU8q7jBvS4BgAUylw4z1nVgd3FfA9UqB9ryf/exec";

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
