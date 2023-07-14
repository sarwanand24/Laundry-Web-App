   document.getElementById("back-arrow").addEventListener("click", function(){
       window.location = "maincontent.html";
      })
      document.getElementById("home").addEventListener("click", function(){
       window.location = "maincontent.html";
      })

      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var weekday = date.getDay();

      var month_name;

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

      var weekday_name;
      
      if( weekday == 1){
        weekday_name = "Mon";
        document.getElementById("weekday1").innerHTML = weekday_name;
      document.getElementById("weekday2").innerHTML = "Tue";
      document.getElementById("weekday3").innerHTML = "Wed";
      document.getElementById("weekday4").innerHTML = "Thu";
      document.getElementById("weekday5").innerHTML = "Fri";
      document.getElementById("weekday6").innerHTML = "Sat";
      document.getElementById("weekday7").innerHTML = "Sun";
      }
      else if( weekday == 2){
        weekday_name = "Tue";
        document.getElementById("weekday1").innerHTML = weekday_name;
      document.getElementById("weekday2").innerHTML = "Wed";
      document.getElementById("weekday3").innerHTML = "Thu";
      document.getElementById("weekday4").innerHTML = "Fri";
      document.getElementById("weekday5").innerHTML = "Sat";
      document.getElementById("weekday6").innerHTML = "Sun";
      document.getElementById("weekday7").innerHTML = "Mon";
      }
      else if( weekday == 3){
        weekday_name = "Wed";
        document.getElementById("weekday1").innerHTML = weekday_name;
      document.getElementById("weekday2").innerHTML = "Thu";
      document.getElementById("weekday3").innerHTML = "Fri";
      document.getElementById("weekday4").innerHTML = "Sat";
      document.getElementById("weekday5").innerHTML = "Sun";
      document.getElementById("weekday6").innerHTML = "Mon";
      document.getElementById("weekday7").innerHTML = "Tue";
      }
      else if( weekday == 4){
        weekday_name = "Thu";
        document.getElementById("weekday1").innerHTML = weekday_name;
      document.getElementById("weekday2").innerHTML = "Fri";
      document.getElementById("weekday3").innerHTML = "Sat";
      document.getElementById("weekday4").innerHTML = "Sun";
      document.getElementById("weekday5").innerHTML = "Mon";
      document.getElementById("weekday6").innerHTML = "Tue";
      document.getElementById("weekday7").innerHTML ="Wed";
      }
      else if( weekday == 5){
        weekday_name = "Fri";
        document.getElementById("weekday1").innerHTML = weekday_name;
      document.getElementById("weekday2").innerHTML = "Sat";
      document.getElementById("weekday3").innerHTML = "Sun";
      document.getElementById("weekday4").innerHTML = "Mon";
      document.getElementById("weekday5").innerHTML = "Tue";
      document.getElementById("weekday6").innerHTML = "Wed";
      document.getElementById("weekday7").innerHTML = "Thu";
      }
      else if( weekday == 6){
        weekday_name = "Sat";
        document.getElementById("weekday1").innerHTML = weekday_name;
      document.getElementById("weekday2").innerHTML = "Sun";
      document.getElementById("weekday3").innerHTML = "Mon";
      document.getElementById("weekday4").innerHTML = "Tue";
      document.getElementById("weekday5").innerHTML = "Wed";
      document.getElementById("weekday6").innerHTML = "Thu";
      document.getElementById("weekday7").innerHTML = "Fri";
      }
      else if( weekday == 0){
        weekday_name = "Sun";
        document.getElementById("weekday1").innerHTML = weekday_name;
      document.getElementById("weekday2").innerHTML = "Mon";
      document.getElementById("weekday3").innerHTML = "Tue";
      document.getElementById("weekday4").innerHTML = "Wed";
      document.getElementById("weekday5").innerHTML = "Thu";
      document.getElementById("weekday6").innerHTML = "Fri";
      document.getElementById("weekday7").innerHTML = "Sat";
      }

      console.log(day);
      console.log(year);
      console.log(month);
      console.log(weekday);

      document.getElementById("month").innerHTML = month_name;
      document.getElementById("year").innerHTML = year;

      if((month == 4 || month == 6 || month == 9 || month == 11) && (day == 25)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = day + 2;
      document.getElementById("day4").innerHTML = day + 3;
      document.getElementById("day5").innerHTML = day + 4;
      document.getElementById("day6").innerHTML = day + 5;
      document.getElementById("day7").innerHTML = 1;
      }
      else if((month == 4 || month == 6 || month == 9 || month == 11) && (day == 26)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = day + 2;
      document.getElementById("day4").innerHTML = day + 3;
      document.getElementById("day5").innerHTML = day + 4;
      document.getElementById("day6").innerHTML = 1;
      document.getElementById("day7").innerHTML = 2;
      }
      else if((month == 4 || month ==  6 || month ==  9 || month ==  11) && (day == 27)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = day + 2;
      document.getElementById("day4").innerHTML = day + 3;
      document.getElementById("day5").innerHTML = 1;
      document.getElementById("day6").innerHTML = 2;
      document.getElementById("day7").innerHTML = 3;
      }
      else if((month == 4 || month ==  6 || month ==  9 || month ==  11) && (day == 28)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = day + 2;
      document.getElementById("day4").innerHTML = 1;
      document.getElementById("day5").innerHTML = 2;
      document.getElementById("day6").innerHTML = 3;
      document.getElementById("day7").innerHTML = 4;
      }
      else if((month == 4 || month ==  6 || month ==  9 || month ==  11) && (day == 29)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = 1;
      document.getElementById("day4").innerHTML = 2;
      document.getElementById("day5").innerHTML = 3;
      document.getElementById("day6").innerHTML = 4;
      document.getElementById("day7").innerHTML = 5;
      }
      else if((month == 4 || month ==  6 || month ==  9 || month ==  11) && (day == 30)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = 1;
      document.getElementById("day3").innerHTML = 2;
      document.getElementById("day4").innerHTML = 3;
      document.getElementById("day5").innerHTML = 4;
      document.getElementById("day6").innerHTML = 5;
      document.getElementById("day7").innerHTML = 6;
      }
      else if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && (day == 26)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = day + 2;
      document.getElementById("day4").innerHTML = day + 3;
      document.getElementById("day5").innerHTML = day + 4;
      document.getElementById("day6").innerHTML = day + 5;
      document.getElementById("day7").innerHTML = 1;
      }
      else if((month == 1 || month ==  3 || month ==  5 || month ==  7 || month ==  8 || month ==  10 || month == 12) && (day == 27)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = day + 2;
      document.getElementById("day4").innerHTML = day + 3;
      document.getElementById("day5").innerHTML = day + 4;
      document.getElementById("day6").innerHTML = 1;
      document.getElementById("day7").innerHTML = 2;
      }
      else if((month == 1 || month ==  3 || month ==  5 || month ==  7 || month ==  8 || month ==  10 || month == 12) && (day == 28)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = day + 2;
      document.getElementById("day4").innerHTML = day + 3;
      document.getElementById("day5").innerHTML = 1;
      document.getElementById("day6").innerHTML = 2;
      document.getElementById("day7").innerHTML = 3;
      }
      else if((month == 1 || month ==  3 || month ==  5 || month ==  7 || month ==  8 || month ==  10 || month == 12) && (day == 29)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = day + 2;
      document.getElementById("day4").innerHTML = 1;
      document.getElementById("day5").innerHTML = 2;
      document.getElementById("day6").innerHTML = 3;
      document.getElementById("day7").innerHTML = 4;
      }
      else if((month == 1 || month ==  3 || month ==  5 || month ==  7 || month ==  8 || month ==  10 || month == 12) && (day == 30)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = 1;
      document.getElementById("day4").innerHTML = 2;
      document.getElementById("day5").innerHTML = 3;
      document.getElementById("day6").innerHTML = 4;
      document.getElementById("day7").innerHTML = 5;
      }
      else if((month == 1 || month ==  3 || month ==  5 || month ==  7 || month ==  8 || month ==  10 || month == 12) && (day == 31)){
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = 1;
      document.getElementById("day3").innerHTML = 2;
      document.getElementById("day4").innerHTML = 3;
      document.getElementById("day5").innerHTML = 4;
      document.getElementById("day6").innerHTML = 5;
      document.getElementById("day7").innerHTML = 6;
      }
     else{
      document.getElementById("day1").innerHTML = day;
      document.getElementById("day2").innerHTML = day + 1;
      document.getElementById("day3").innerHTML = day + 2;
      document.getElementById("day4").innerHTML = day + 3;
      document.getElementById("day5").innerHTML = day + 4;
      document.getElementById("day6").innerHTML = day + 5;
      document.getElementById("day7").innerHTML = day + 6;
     }

     var selected_date;
     var radiobox = [];

     for(let i=1; i<=7; i++){
            document.getElementById(i).addEventListener("click", function(){
              for(let j=1; j<=7; j++){
                  radiobox[j] = document.getElementById(j);
                  if(radiobox[j].checked){
                    if(j == 1){
                        document.getElementById("d1").classList.add("selected");
                        selected_date = document.getElementById("day1").innerHTML;
                    }
                    if(j == 2){
                        document.getElementById("d2").classList.add("selected");
                        selected_date = document.getElementById("day2").innerHTML;
                    }
                    if(j == 3){
                        document.getElementById("d3").classList.add("selected");
                        selected_date = document.getElementById("day3").innerHTML;
                    }
                    if(j == 4){
                        document.getElementById("d4").classList.add("selected");
                        selected_date = document.getElementById("day4").innerHTML;
                    }
                    if(j == 5){
                        document.getElementById("d5").classList.add("selected");
                        selected_date = document.getElementById("day5").innerHTML;
                    }
                    if(j == 6){
                        document.getElementById("d6").classList.add("selected");
                        selected_date = document.getElementById("day6").innerHTML;
                    }
                    if(j == 7){
                        document.getElementById("d7").classList.add("selected");
                        selected_date = document.getElementById("day7").innerHTML;
                    }
                }
                if(!radiobox[j].checked){
                    if(j == 1){
                        document.getElementById("d1").classList.remove("selected");
                    }
                    if(j == 2){
                        document.getElementById("d2").classList.remove("selected");
                    }
                    if(j == 3){
                        document.getElementById("d3").classList.remove("selected");
                    }
                    if(j == 4){
                        document.getElementById("d4").classList.remove("selected");
                    }
                    if(j == 5){
                        document.getElementById("d5").classList.remove("selected");
                    }
                    if(j == 6){
                        document.getElementById("d6").classList.remove("selected");
                    }
                    if(j == 7){
                        document.getElementById("d7").classList.remove("selected");
                    }
                }
              }
              document.getElementById("continue").addEventListener("click", function(){
              console.log(selected_date);//Carrying the end result , yaha se cookies karo direct last cart m.
              sessionStorage.setItem("selected_date2", selected_date);
              window.location = "address.html";
            })
            })
          }
