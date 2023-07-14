  document.getElementById("back-arrow").addEventListener("click", function(){
   window.location = "date-cart.html";
  })
  document.getElementById("home").addEventListener("click", function(){
   window.location = "maincontent.html";
  })

  var aptment = saveapt = document.getElementById("aptment");
  var landmark = savelnd = document.getElementById("lndm");
  var Name = savenm = document.getElementById("nameInp");
  var pincode = savepin = document.getElementById("pincode");
  var mobile = savemob = document.getElementById("mobInp");
  var flag;
  var odtype4 = sessionStorage.getItem("odtype2");

  document.getElementById("continue").addEventListener("click", function(){ 
     if((aptment.value!= "" || landmark.value!= "") && Name.value!= "" && pincode.value!= "" && mobile.value!= ""){
      flag = 1;
      localStorage.setItem("flag2", flag);
          //FOR SAVING IN DATABASE
          localStorage.setItem("aptment2", aptment.value);
          localStorage.setItem("landmark2", landmark.value);
          localStorage.setItem("Name2", Name.value);
          localStorage.setItem("pincode2", pincode.value);
          localStorage.setItem("mobile2", mobile.value);
          //FOR SAVING INFO
          localStorage.setItem("saveapt2", saveapt.value);
          localStorage.setItem("savelnd2", savelnd.value);
          localStorage.setItem("savenm2", savenm.value);
          localStorage.setItem("savepin2", savepin.value);
          localStorage.setItem("savemob2", savemob.value);

          if(odtype4 == "Membership Recharge"){
             window.location = "membership-cart.html";
          }
          else{
            window.location = "order-details.html";
          }
     }
     else{
         swal({
              text: "Please Fill All Fields",
             });
         }
  })

  window.onload = function(){
    var flag3 = localStorage.getItem("flag2");
    if(flag3 == 1){
       var saveapt3 = localStorage.getItem("saveapt2");
       var savelnd3 = localStorage.getItem("savelnd2");
       var savenm3 = localStorage.getItem("savenm2");
       var savepin3 = localStorage.getItem("savepin2");
       var savemob3 = localStorage.getItem("savemob2");

       document.getElementById("aptment").value = saveapt3;
       document.getElementById("lndm").value = savelnd3;
       document.getElementById("nameInp").value = savenm3;
       document.getElementById("pincode").value = savepin3;
       document.getElementById("mobInp").value = savemob3;
    }
  }
