            document.getElementById("continue").addEventListener("click", function(){
            window.location = "date-cart.html";
           })
           document.getElementById("back-arrow").addEventListener("click", function(){
            window.location = "maincontent.html";
           })
           document.getElementById("home").addEventListener("click", function(){
            window.location = "maincontent.html";
           })
           document.getElementById("1").addEventListener("click", function(){
            document.getElementById("1").classList.toggle("check-toggle");
           })
           document.getElementById("2").addEventListener("click", function(){
            document.getElementById("2").classList.toggle("check-toggle");
           })
           document.getElementById("3").addEventListener("click", function(){
            document.getElementById("3").classList.toggle("check-toggle");
           })
           document.getElementById("4").addEventListener("click", function(){
            document.getElementById("4").classList.toggle("check-toggle");
           })
           document.getElementById("5").addEventListener("click", function(){
            document.getElementById("5").classList.toggle("check-toggle");
           })

           var checkbox = [];
           var laundry_type = [];

           for(let i=1; i<=5; i++){
            document.getElementById(i).addEventListener("click", function(){
                for(let j=1; j<=5; j++){
                  checkbox[j] = document.getElementById(j);
                  if(checkbox[j].checked){
                    if(j == 1){
                        if(!laundry_type.includes("Premium Laundry")){
                        laundry_type.push("Premium Laundry");
                        }
                    }
                    if(j == 2){
                        if(!laundry_type.includes("Organic Laundry")){
                        laundry_type.push("Organic Laundry");
                        }
                    }
                    if(j == 3){          
                        if(!laundry_type.includes("Steam Press")){
                        laundry_type.push("Steam Press");
                        }
                    }
                    if(j == 4){ 
                        if(!laundry_type.includes("Dry Clean")){
                        laundry_type.push("Dry Clean");
                        }
                    }
                    if(j == 5){
                        if(!laundry_type.includes("Shoes Laundry")){
                        laundry_type.push("Shoes Laundry");
                        }
                    }
                  }
                  if(!checkbox[j].checked){
                    if(j == 1){
                       if(laundry_type.includes("Premium Laundry")){
                          laundry_type.splice(laundry_type.indexOf("Premium Laundry"),1);
                       }
                    }
                    if(j == 2){
                       if(laundry_type.includes("Organic Laundry")){
                          laundry_type.splice(laundry_type.indexOf("Organic Laundry"),1);
                       }
                    }
                    if(j == 3){
                       if(laundry_type.includes("Steam Press")){
                          laundry_type.splice(laundry_type.indexOf("Steam Press"),1);
                       }
                    }
                    if(j == 4){
                       if(laundry_type.includes("Dry Clean")){
                          laundry_type.splice(laundry_type.indexOf("Dry Clean"),1);
                       }
                    }
                    if(j == 5){
                       if(laundry_type.includes("Shoes Laundry")){
                          laundry_type.splice(laundry_type.indexOf("Shoes Laundry"),1);
                       }
                    }
                  }
                }
                document.getElementById("continue").addEventListener("click", function(){
                console.log(laundry_type);//Carrying the end result , yaha se cookies karo direct last cart m.
                sessionStorage.setItem("laundry_type2", laundry_type);
                window.location = "date-cart.html";
                })
            })
           }
