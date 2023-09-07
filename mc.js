    // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCDqQzRmuFOXQgfc12PIxzCDcHIJcIUW0I",
    authDomain: "laundry-walaa.firebaseapp.com",
    projectId: "laundry-walaa",
    storageBucket: "laundry-walaa.appspot.com",
    messagingSenderId: "164078565347",
    appId: "1:164078565347:web:f7169029dad99f15fa52d6",
    measurementId: "G-54QCKHK71N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

        import{ getDatabase, ref, set, child, get}
        from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

        const database = getDatabase();
        const auth = getAuth(app);

        var amount = document.getElementById("amount");
        var name = document.getElementById("nameInp");
        var mobile = document.getElementById("mobInp");
        var address = document.getElementById("addInp");
        var submit = document.getElementById("submit");
        //GETTING THE QUANTITY, TOTAL AND PRICE OF THE CART
var sum_of_total3 = sessionStorage.getItem("sum_of_total2");
var sum_of_quant3 = sessionStorage.getItem("sum_of_quant2");
var count3 = JSON.parse(sessionStorage.getItem("count2"));
console.log(count3);
var sub_total3 = JSON.parse(sessionStorage.getItem("sub_total2"));
console.log(sub_total3);

var no_of_item = [];
amount.innerHTML = sum_of_total3;
for(var i=1; i<=25; i++){
    no_of_item[i] = document.getElementById("no-of-item"+i);
    console.log(count3[i]);
   if(count3[i] > 0){
    console.log(i);
      console.log(count3[i]);
      console.log(sub_total3[i]);
      document.getElementById("listshow"+i).style.display = "block";
      no_of_item[i].innerHTML = count3[i];
   }
    document.getElementById("inc"+i).addEventListener("click", function(){
        console.log(this.id);
        var number = this.id.replace(/[a-z]/g,"");
        console.log(number);
        count3[number]++;
        console.log(count3[number]);
        if(number == 1 || number == 2 || number == 3 || number == 16 || number == 17){
            sub_total3[number] = count3[number]*15;
            console.log(sub_total3[number]);
        }
        else if(number == 4 || number == 13){
            sub_total3[number] = count3[number]*20;
            console.log(sub_total3[number]);
        }
        else if(number == 5){
            sub_total3[number] = count3[number]*10;
            console.log(sub_total3[number]);
        }
        else if(number == 6 || number == 7){
            sub_total3[number] = count3[number]*65;
            console.log(sub_total3[number]);
        }
        else if(number == 8 || number == 9){
            sub_total3[number] = count3[number]*45;
            console.log(sub_total3[number]);
        }
        else if(number == 10 || number == 20 || number == 21 || number == 22){
            sub_total3[number] = count3[number]*49;
            console.log(sub_total3[number]);
        }
        else if(number == 11){
            sub_total3[number] = count3[number]*59;
            console.log(sub_total3[number]);
        }
        else if(number == 12){
            sub_total3[number] = count3[number]*79;
            console.log(sub_total3[number]);
        }
        else if(number == 14){
            sub_total3[number] = count3[number]*8;
            console.log(sub_total3[number]);
        }
        else if(number == 15){
            sub_total3[number] = count3[number]*39;
            console.log(sub_total3[number]);
        }
        else if(number == 18){
            sub_total3[number] = count3[number]*249;
            console.log(sub_total3[number]);
        }
        else if(number == 19){
            sub_total3[number] = count3[number]*349;
            console.log(sub_total3[number]);
        }
        else if(number == 23){
            sub_total3[number] = count3[number]*129;
            console.log(sub_total3[number]);
        }
        else if(number == 24 || number == 25){
            sub_total3[number] = count3[number]*149;
            console.log(sub_total3[number]);
        }
        no_of_item[number].innerHTML = count3[number];
        var sum_of_total = 0;
        for(var j = 1; j<=25; j++){
           sum_of_total = sum_of_total + sub_total3[j];
           console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
           console.log(count3[j]);//QUANTITY OF SEPARATE CLOTHES
           console.log(sub_total3[j]);//PRICE OF SEPARATE CLOTHES
        }
        amount.innerHTML = sum_of_total;
    })

    document.getElementById("dec"+i).addEventListener("click", function(){
        console.log(this.id);
        var number = this.id.replace(/[a-z]/g,"");
        console.log(number);
        if(count3[number] > 0){
        count3[number]--;
        }
        console.log(count3[number]);
        if(number == 1 || number == 2 || number == 3 || number == 16 || number == 17){
            sub_total3[number] = count3[number]*15;
            console.log(sub_total3[number]);
        }
        else if(number == 4 || number == 13){
            sub_total3[number] = count3[number]*20;
            console.log(sub_total3[number]);
        }
        else if(number == 5){
            sub_total3[number] = count3[number]*10;
            console.log(sub_total3[number]);
        }
        else if(number == 6 || number == 7){
            sub_total3[number] = count3[number]*65;
            console.log(sub_total3[number]);
        }
        else if(number == 8 || number == 9){
            sub_total3[number] = count3[number]*45;
            console.log(sub_total3[number]);
        }
        else if(number == 10 || number == 20 || number == 21 || number == 22){
            sub_total3[number] = count3[number]*49;
            console.log(sub_total3[number]);
        }
        else if(number == 11){
            sub_total3[number] = count3[number]*59;
            console.log(sub_total3[number]);
        }
        else if(number == 12){
            sub_total3[number] = count3[number]*79;
            console.log(sub_total3[number]);
        }
        else if(number == 14){
            sub_total3[number] = count3[number]*8;
            console.log(sub_total3[number]);
        }
        else if(number == 15){
            sub_total3[number] = count3[number]*39;
            console.log(sub_total3[number]);
        }
        else if(number == 18){
            sub_total3[number] = count3[number]*249;
            console.log(sub_total3[number]);
        }
        else if(number == 19){
            sub_total3[number] = count3[number]*349;
            console.log(sub_total3[number]);
        }
        else if(number == 23){
            sub_total3[number] = count3[number]*129;
            console.log(sub_total3[number]);
        }
        else if(number == 24 || number == 25){
            sub_total3[number] = count3[number]*149;
            console.log(sub_total3[number]);
        }
        no_of_item[number].innerHTML = count3[number];
        var sum_of_total = 0;
        for(var j = 1; j<=25; j++){
           sum_of_total = sum_of_total + sub_total3[j];
           console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
           console.log(count3[j]);//QUANTITY OF SEPARATE CLOTHES
           console.log(sub_total3[j]);//PRICE OF SEPARATE CLOTHES
        }
        amount.innerHTML = sum_of_total;
    })
}
var flag;
function write(){
    if(name.value!== "" && mobile.value!== "" && address.value!== ""){
        flag = 1;
        localStorage.setItem("flag2", flag);
        localStorage.setItem("name2", name.value);
        localStorage.setItem("mobile2", mobile.value);
        localStorage.setItem("address2", address.value);
        var j = Math.random() * 100;
            j = Math.floor(j);
            const db = getDatabase();
              set(ref(db, "OrdersList/"+ name.value+j),{
                Name: name.value,
                Mobile: mobile.value,
                Address:address.value,
                Total_Amount: amount.innerText,
                Total_Quantity: sum_of_quant3,
                Order_Type: "Laundry",
                 });
                 
                 swal({
                title: "Hurray!",
                text: "Order Confirmed!",
                icon: "success",
                button: "Next",
                });
                setTimeout(function(){
                  window.location = "maincontent.html";  
                }, 3000);  
    }

    else{
        swal({
              text: "Please Fill All Fields",
             });
    }
            }
     
submit.addEventListener("click", write);

window.onload = function(){
    var flag3 = localStorage.getItem("flag2");
    if(flag3 == 1){
       var name3 = localStorage.getItem("name2");
       var mobile3 = localStorage.getItem("mobile2");
       var address3 = localStorage.getItem("address2");

       document.getElementById("nameInp").value = name3;
       document.getElementById("mobInp").value = mobile3;
       document.getElementById("addInp").value = address3;
    }
}
