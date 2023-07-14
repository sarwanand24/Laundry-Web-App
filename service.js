     var type;
     document.getElementById("prem-laundry").addEventListener("click", function(){
          type = "premium";
          sessionStorage.setItem("type2", type);
          window.location = "ratecard.html";
     })
     document.getElementById("org-laundry").addEventListener("click", function(){
          type = "organic";
          sessionStorage.setItem("type2", type);
          window.location = "ratecard.html";
     })
     document.getElementById("shoe-laundry").addEventListener("click", function(){
          type = "shoes";
          sessionStorage.setItem("type2", type);
          window.location = "ratecard.html";
     })
     document.getElementById("dry-clean").addEventListener("click", function(){
          type = "dry-clean";
          sessionStorage.setItem("type2", type);
          window.location = "ratecard.html";
     })
     document.getElementById("iron").addEventListener("click", function(){
          type = "iron";
          sessionStorage.setItem("type2", type);
          window.location = "ratecard.html";
     })

           document.getElementById("back-arrow").addEventListener("click", function(){
            window.location = "maincontent.html";
           })
           document.getElementById("home").addEventListener("click", function(){
            window.location = "maincontent.html";
           })
