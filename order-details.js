       // Import the functions you need from the SDKs you need
          import { initializeApp } from "/firebase-app.js";
  import { getAnalytics } from "/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "/firebase-auth.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1:164078565347:"",
    measurementId: ""
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

        import{ getDatabase, ref, set, child, get}
        from "/firebase-database.js";

        const database = getDatabase();
        const auth = getAuth(app);

       var aptment3 = localStorage.getItem("aptment2");
       var landmark3 = localStorage.getItem("landmark2");
       var Name3 = localStorage.getItem("Name2");
       var pincode3 = localStorage.getItem("pincode2");
       var mobile3 = localStorage.getItem("mobile2");
       var date = sessionStorage.getItem("selected_date2");
       var odtype3 = sessionStorage.getItem("odtype2");
       var colors3 = [];
       colors3 = sessionStorage.getItem("colors2");
       var laundry_type3 = [];
       laundry_type3 = sessionStorage.getItem("laundry_type2");
       var submit = document.getElementById("continue");
       console.log(Name3);
       document.getElementById("address").innerHTML = landmark3;
       console.log(landmark3);
       document.getElementById("order-type").innerHTML = odtype3;
       console.log(odtype3);

      var dateRef = new Date();
      var year = dateRef.getFullYear();
      var month = dateRef.getMonth() + 1;
      var day = dateRef.getDate();
      console.log(year);
      console.log(month);
      console.log(day);
      var month_name;

      if(date < day){
        month = month + 1;
        if( month == 1){
        month_name = "January";
      }
      else if( month == 2){
        month_name = "February";
      }
      else if( month == 3){
        month_name = "March";
      }
      else if( month == 4){
        month_name = "April";
      }
      else if( month == 5){
        month_name = "May";
      }
      else if( month == 6){
        month_name = "June";
      }
      else if( month == 7){
        month_name = "July";
      }
      else if( month == 8){
        month_name = "August";
      }
      else if( month == 9){
        month_name = "September";
      }
      else if( month == 10){
        month_name = "October";
      }
      else if( month == 11){
        month_name = "November";
      }
      else if( month == 12){
        month_name = "December";
      }
      }

      else{
        if( month == 1){
        month_name = "January";
      }
      else if( month == 2){
        month_name = "February";
      }
      else if( month == 3){
        month_name = "March";
      }
      else if( month == 4){
        month_name = "April";
      }
      else if( month == 5){
        month_name = "May";
      }
      else if( month == 6){
        month_name = "June";
      }
      else if( month == 7){
        month_name = "July";
      }
      else if( month == 8){
        month_name = "August";
      }
      else if( month == 9){
        month_name = "September";
      }
      else if( month == 10){
        month_name = "October";
      }
      else if( month == 11){
        month_name = "November";
      }
      else if( month == 12){
        month_name = "December";
      }
      }

       document.getElementById("pickup-date").innerHTML = date+" "+month_name+" "+year;
       var dbdate = date+" "+month_name+" "+year;
       console.log(dbdate);
       console.log(date);

       function write(){
            var j = Math.random() * 100;
            j = Math.floor(j);

            const db = getDatabase();
              set(ref(db, "OrdersList/"+ Name3+j),{
                Name: Name3,
                Appartment: aptment3,
                Landmark: landmark3,
                PinCode: pincode3,
                Mobile: mobile3,
                Date: dbdate,
                Order_Type: odtype3,
                Laundry_Type: laundry_type3,
                Dye_Color: colors3,
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

       submit.addEventListener("click", write);

  document.getElementById("back-arrow").addEventListener("click", function(){
   window.location = "address.html";
  })
  document.getElementById("home").addEventListener("click", function(){
   window.location = "maincontent.html";
  })
