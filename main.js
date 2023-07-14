
          var odtype;
document.getElementById("laundry").addEventListener("click", function(){
    odtype = "Laundry";
    console.log(odtype);
    sessionStorage.setItem("odtype2", odtype);
    window.location = "services.html";
})

document.getElementById("recharge").addEventListener("click", function(){
    odtype = "Membership Recharge";
    console.log(odtype);
    sessionStorage.setItem("odtype2", odtype);
    window.location = "membership.html";
})

document.getElementById("dye").addEventListener("click", function(){
    odtype = "Clothes Dye";
    console.log(odtype);
    sessionStorage.setItem("odtype2", odtype);
    window.location = "dye-color.html";
})

document.getElementById("official-staff").addEventListener("click", function(){
    odtype = "Official Staff";
    console.log(odtype);
    sessionStorage.setItem("odtype2", odtype);
    window.location = "official-staff.html";
})

document.getElementById("cart").addEventListener("click", function(){
    odtype = "Laundry";
    console.log(odtype);
    sessionStorage.setItem("odtype2", odtype);
    window.location = "cart.html";
})

        document.getElementById("get-location").addEventListener("click", function(){
            document.getElementById("location-perm").style.display = "none";
           var perm_flag = 1;
           localStorage.setItem("perm_flag2", perm_flag);
        })

    function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } 
        }

        function showPosition(position) {
        var lat = position.coords.latitude ;
        var long = position.coords.longitude;
        if(lat >= 22.3259 && lat <= 22.4933 && long >= 87.3184){
            document.getElementById("location-name").innerHTML = "Chota Tengra, Kharagpur";
        }
        else if(lat >= 22.3269 && lat <= 22.3314 && long >= 87.3339){
            document.getElementById("location-name").innerHTML = "Jhapetapur, Kharagpur";
        }
        else if(lat >= 22.367635 && lat <= 22.9914 && long >= 87.339185){
            document.getElementById("location-name").innerHTML = "Reshmi, Kharagpur";
        }
        else if(lat >= 22.3229 && lat <= 22.3258 && long >= 87.3184){
            document.getElementById("location-name").innerHTML = "Sonamukhi, Jholi, Kharagpur";
        }
        else if(lat >= 22.3200 && lat <= 22.3229 && long >= 87.3191){
            document.getElementById("location-name").innerHTML = "Hijli, Kharagpur";
        }
        else if(lat >= 22.3149 && lat <= 22.3258 && long >= 87.3105){
            document.getElementById("location-name").innerHTML = "IIT Kharagpur";
        }
        else if(lat >= 22.3258 && lat <= 22.3259 && long >= 87.31337){
            document.getElementById("location-name").innerHTML = "Purigate, Kharagpur";
        }
        else if(lat >= 22.3508 && lat <= 22.3510 && long >= 87.3389){
            document.getElementById("location-name").innerHTML = "Inda, Kharagpur";
        }
        else if(lat >= 22.3137 && lat <= 22.3149 && long >= 87.2879){
            document.getElementById("location-name").innerHTML = "Talbagicha, Kharagpur";
        }
        else if(lat >= 22.3048 && lat <= 22.3149 && long >= 87.3047){
            document.getElementById("location-name").innerHTML = "Prembazar, Kharagpur";
        }
        else if(lat >= 22.3434 && lat <= 22.3377 && long >= 87.2847){
            document.getElementById("location-name").innerHTML = "Malancha, Kharagpur";
        }
        else if(lat >= 22.2861 && lat <= 22.3048 && long >= 87.2979){
            document.getElementById("location-name").innerHTML = "Gopali, Kharagpur";
        }
       else{
        document.getElementById("location-name").innerHTML = "Kharagpur";
       }
      localStorage.setItem("lat2", lat);
      localStorage.setItem("long2", long);
        }
    
        window.onload = function(){

            var lat3 = localStorage.getItem("lat2");
           var long3 = localStorage.getItem("long2");
           console.log(lat3);
           console.log(long3);
           var perm_flag3 = localStorage.getItem("perm_flag2");

            if(perm_flag3 > 0){
                document.getElementById("location-perm").style.display = "none";
            }
            if(lat3 >= 22.3259 && lat3 <= 22.4933 && long3 >= 87.3184){
            document.getElementById("location-name").innerHTML = "Chota Tengra, Kharagpur";
        }
        else if(lat3 >= 22.3269 && lat3 <= 22.3314 && long3 >= 87.3339){
            document.getElementById("location-name").innerHTML = "Jhapetapur, Kharagpur";
        }
        else if(lat3 >= 22.367635 && lat3 <= 22.9914 && long3 >= 87.339185){
            document.getElementById("location-name").innerHTML = "Reshmi, Kharagpur";
        }
        else if(lat3 >= 22.3229 && lat3 <= 22.3258 && long3 >= 87.3184){
            document.getElementById("location-name").innerHTML = "Sonamukhi, Jholi, Kharagpur";
        }
        else if(lat3 >= 22.3200 && lat3 <= 22.3229 && long3 >= 87.3191){
            document.getElementById("location-name").innerHTML = "Hijli, Kharagpur";
        }
        else if(lat3 >= 22.3149 && lat3 <= 22.3258 && long3 >= 87.3105){
            document.getElementById("location-name").innerHTML = "IIT Kharagpur";
        }
        else if(lat3 >= 22.3258 && lat3 <= 22.3259 && long3 >= 87.31337){
            document.getElementById("location-name").innerHTML = "Purigate, Kharagpur";
        }
        else if(lat3 >= 22.3508 && lat3 <= 22.3510 && long3 >= 87.3389){
            document.getElementById("location-name").innerHTML = "Inda, Kharagpur";
        }
        else if(lat3 >= 22.3137 && lat3 <= 22.3149 && long3 >= 87.2879){
            document.getElementById("location-name").innerHTML = "Talbagicha, Kharagpur";
        }
        else if(lat3 >= 22.3048 && lat3 <= 22.3149 && long3 >= 87.3047){
            document.getElementById("location-name").innerHTML = "Prembazar, Kharagpur";
        }
        else if(lat3 >= 22.3434 && lat3 <= 22.3377 && long3 >= 87.2847){
            document.getElementById("location-name").innerHTML = "Malancha, Kharagpur";
        }
        else if(lat3 >= 22.2861 && lat3 <= 22.3048 && long3 >= 87.2979){
            document.getElementById("location-name").innerHTML = "Gopali, Kharagpur";
        }
       else{
        document.getElementById("location-name").innerHTML = "Kharagpur";
       }
        }
