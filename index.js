document.getElementById("next1").addEventListener("click", function(){

    document.getElementById("slide1").style.display="none";
    document.getElementById("slide2").style.display="block";

})

document.getElementById("next2").addEventListener("click", function(){

    var flag = 1;
localStorage.setItem("flag1",flag);

    window.location = "maincontent.html";

})

window.onload = function(){

var flag2 = localStorage.getItem("flag1");

if(flag2 > 0){

    setTimeout(()=>{
        window.location = "maincontent.html";
    },2000);

}

}

setTimeout(()=>{
      document.getElementById("splash").classList.toggle("fade");
    },5000);

