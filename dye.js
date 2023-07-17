     var width = screen.width;
        console.log(width);
        if(width >= 360 && width < 412){
           document.getElementById("c").innerHTML = "Sky Blue";
           document.getElementById("c2").innerHTML = "Rani Pink";
        }
        else if(width >= 412 && width < 768){
           document.getElementById("c").innerHTML = "Sky Blue Colour";
           document.getElementById("c2").innerHTML = "Rani Pink Colour";
        }
        else if(width < 360){
           document.getElementById("c").innerHTML = "Sky Blue Colour";
        }
        else if(width >= 768){
           document.getElementById("lc1").innerHTML = "Dark Blue Colour";
           document.getElementById("lc2").innerHTML = "Steel Gray Colour";
           document.getElementById("c2").innerHTML = "Rani Pink Colour";
           document.getElementById("lc3").innerHTML = "Baby Pink Colour";
        }
        document.getElementById("back-arrow").addEventListener("click", function(){
            window.location = "maincontent.html";
           })
           document.getElementById("home").addEventListener("click", function(){
            window.location = "maincontent.html";
           })

           var checkbox = [];
           var colors = [];

           for(let i=1; i<=20; i++){
            document.getElementById(i).addEventListener("click", function(){
                for(let j=1; j<=20; j++){
                  checkbox[j] = document.getElementById(j);
                  if(checkbox[j].checked){
                    if(j == 1){
                        document.getElementById("lemon-yellow").classList.add("selected");
                        if(!colors.includes("Lemon Yellow")){
                        colors.push("Lemon Yellow");
                        }
                    }
                    if(j == 2){
                        document.getElementById("golden-yellow").classList.add("selected");
                        if(!colors.includes("Golden Yellow")){
                        colors.push("Golden Yellow");
                        }
                    }
                    if(j == 3){
                        document.getElementById("orange").classList.add("selected");
                        if(!colors.includes("Orange")){
                        colors.push("Orange");
                        }
                    }
                    if(j == 4){
                        document.getElementById("red").classList.add("selected");
                        if(!colors.includes("Red")){
                        colors.push("Red");
                        }
                    }
                    if(j == 5){
                        document.getElementById("pink").classList.add("selected");
                        if(!colors.includes("Pink")){
                        colors.push("Pink");
                        }
                    }
                    if(j == 6){
                        document.getElementById("lavender").classList.add("selected");
                        if(!colors.includes("Lavender")){
                        colors.push("Lavender");
                        }
                    }
                    if(j == 7){
                        document.getElementById("violet").classList.add("selected");
                        if(!colors.includes("Violet")){
                        colors.push("Violet");
                        }
                    }
                    if(j == 8){
                        document.getElementById("blue").classList.add("selected");
                        if(!colors.includes("Blue")){
                        colors.push("Blue");
                        }
                    }
                    if(j == 9){
                        document.getElementById("dark-blue").classList.add("selected");
                        if(!colors.includes("Dark Blue")){
                        colors.push("Dark Blue");
                        }
                    }
                    if(j == 10){
                        document.getElementById("sky-blue").classList.add("selected");
                        if(!colors.includes("Sky Blue")){
                        colors.push("Sky Blue");
                        }
                    }
                    if(j == 11){
                        document.getElementById("brown").classList.add("selected");
                       if(!colors.includes("Brown")){
                          colors.push("Brown");
                       }
                    }
                    if(j == 12){
                        document.getElementById("rani-pink").classList.add("selected");
                       if(!colors.includes("Rani Pink")){
                         colors.push("Rani Pink");
                       }
                    }
                    if(j == 13){
                        document.getElementById("bottle-green").classList.add("selected");
                       if(!colors.includes("Bottle Green")){
                         colors.push("Bottle Green");
                       }
                    }
                    if(j == 14){
                        document.getElementById("green").classList.add("selected");
                       if(!colors.includes("Green")){
                         colors.push("Green");
                       }
                    }
                    if(j == 15){
                        document.getElementById("parrot-green").classList.add("selected");
                       if(!colors.includes("Parrot Green")){
                         colors.push("Parrot Green");
                       }
                    }
                    if(j == 16){
                        document.getElementById("steel-gray").classList.add("selected");
                       if(!colors.includes("Steel Gray")){
                         colors.push("Steel Gray");
                       }
                    }
                    if(j == 17){
                        document.getElementById("black").classList.add("selected");
                       if(!colors.includes("Black")){
                         colors.push("Black");
                       }
                    }
                    if(j == 18){
                        document.getElementById("baby-pink").classList.add("selected");
                       if(!colors.includes("Baby Pink")){
                         colors.push("Baby Pink");
                       }
                    }
                    if(j == 19){
                        document.getElementById("sun-orange").classList.add("selected");
                       if(!colors.includes("Sun Orange")){
                         colors.push("Sun Orange");
                       }
                    }
                    if(j == 20){
                        document.getElementById("peach").classList.add("selected");
                       if(!colors.includes("Peach")){
                          colors.push("Peach");
                       }
                    }
                  }
                  if(!checkbox[j].checked){
                    if(j == 1){
                        document.getElementById("lemon-yellow").classList.remove("selected");
                       if(colors.includes("Lemon Yellow")){
                          colors.splice(colors.indexOf("Lemon Yellow"),1);
                       }
                    }
                    if(j == 2){
                        document.getElementById("golden-yellow").classList.remove("selected");
                       if(colors.includes("Golden Yellow")){
                          colors.splice(colors.indexOf("Golden Yellow"),1);
                       }
                    }
                    if(j == 3){
                        document.getElementById("orange").classList.remove("selected");
                       if(colors.includes("Orange")){
                          colors.splice(colors.indexOf("Orange"),1);
                       }
                    }
                    if(j == 4){
                        document.getElementById("red").classList.remove("selected");
                       if(colors.includes("Red")){
                          colors.splice(colors.indexOf("Red"),1);
                       }
                    }
                    if(j == 5){
                        document.getElementById("pink").classList.remove("selected");
                       if(colors.includes("Pink")){
                          colors.splice(colors.indexOf("Pink"),1);
                       }
                    }
                    if(j == 6){
                        document.getElementById("lavender").classList.remove("selected");
                       if(colors.includes("Lavender")){
                          colors.splice(colors.indexOf("Lavender"),1);
                       }
                    }
                    if(j == 7){
                        document.getElementById("violet").classList.remove("selected");
                       if(colors.includes("Violet")){
                          colors.splice(colors.indexOf("Violet"),1);
                       }
                    }
                    if(j == 8){
                        document.getElementById("blue").classList.remove("selected");
                       if(colors.includes("Blue")){
                          colors.splice(colors.indexOf("Blue"),1);
                       }
                    }
                    if(j == 9){
                        document.getElementById("dark-blue").classList.remove("selected");
                       if(colors.includes("Dark Blue")){
                          colors.splice(colors.indexOf("Dark Blue"),1);
                       }
                    }
                    if(j == 10){
                        document.getElementById("sky-blue").classList.remove("selected");
                       if(colors.includes("Sky Blue")){
                          colors.splice(colors.indexOf("Sky Blue"),1);
                       }
                    }
                    if(j == 11){
                        document.getElementById("brown").classList.remove("selected");
                       if(colors.includes("Brown")){
                          colors.splice(colors.indexOf("Brown"),1);
                       }
                    }
                    if(j == 12){
                        document.getElementById("rani-pink").classList.remove("selected");
                       if(colors.includes("Rani Pink")){
                          colors.splice(colors.indexOf("Rani Pink"),1);
                       }
                    }
                    if(j == 13){
                        document.getElementById("bottle-green").classList.remove("selected");
                       if(colors.includes("Bottle Green")){
                          colors.splice(colors.indexOf("Bottle Green"),1);
                       }
                    }
                    if(j == 14){
                        document.getElementById("green").classList.remove("selected");
                       if(colors.includes("Green")){
                          colors.splice(colors.indexOf("Green"),1);
                       }
                    }
                    if(j == 15){
                        document.getElementById("parrot-green").classList.remove("selected");
                       if(colors.includes("Parrot Green")){
                          colors.splice(colors.indexOf("Parrot Green"),1);
                       }
                    }
                    if(j == 16){
                        document.getElementById("steel-gray").classList.remove("selected");
                       if(colors.includes("Steel Gray")){
                          colors.splice(colors.indexOf("Steel Gray"),1);
                       }
                    }
                    if(j == 17){
                        document.getElementById("black").classList.remove("selected");
                       if(colors.includes("Black")){
                          colors.splice(colors.indexOf("Black"),1);
                       }
                    }
                    if(j == 18){
                        document.getElementById("baby-pink").classList.remove("selected");
                       if(colors.includes("Baby Pink")){
                          colors.splice(colors.indexOf("Baby Pink"),1);
                       }
                    }
                    if(j == 19){
                        document.getElementById("sun-orange").classList.remove("selected");
                       if(colors.includes("Sun Orange")){
                          colors.splice(colors.indexOf("Sun Orange"),1);
                       }
                    }
                    if(j == 20){
                        document.getElementById("peach").classList.remove("selected");
                       if(colors.includes("Peach")){
                          colors.splice(colors.indexOf("Peach"),1);
                       }
                    }
                  }
                }
                document.getElementById("schedule-pickup").addEventListener("click", function(){
                console.log(colors);//Carrying the end result , yaha se cookies karo direct last cart m.
                sessionStorage.setItem("colors2", colors);
                window.location = "date-cart.html";
                })
            })
           }
