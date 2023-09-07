  function search_list(){  

 let input = document.getElementById("searchbar").value;
 input=input.toLowerCase();
 let x = document.getElementsByClassName("list-name");
 let y = document.getElementsByClassName("list-to-show");

 for (i = 0; i < x.length; i++){
  if (!x[i].innerHTML.toLowerCase().includes(input) ) {
    y[i].style.display="none";
  }
 else{
  y[i].style.display="block";
 }
 }
}

var no_of_item = [];
var count = [];
var sub_total = [];
var total = document.getElementById("total");
var total_item = document.getElementById("items");

for(var i = 1; i<=25; i++){
    no_of_item[i] = document.getElementById("no-of-item"+i);
    count[i] = 0;
    sub_total[i] = 0;
    //**********INCREMENT FUNCTION**********
    document.getElementById("inc"+i).addEventListener("click", function(){
        console.log(this.id);
        var number = this.id.replace(/[a-z]/g,"");
        console.log(number);
        count[number]++;
        console.log(count[number]);
        if(number == 1 || number == 2 || number == 3 || number == 16 || number == 17){
            sub_total[number] = count[number]*15;
            console.log(sub_total[number]);
        }
        else if(number == 4 || number == 13){
            sub_total[number] = count[number]*20;
            console.log(sub_total[number]);
        }
        else if(number == 5){
            sub_total[number] = count[number]*10;
            console.log(sub_total[number]);
        }
        else if(number == 6 || number == 7){
            sub_total[number] = count[number]*65;
            console.log(sub_total[number]);
        }
        else if(number == 8 || number == 9){
            sub_total[number] = count[number]*45;
            console.log(sub_total[number]);
        }
        else if(number == 10 || number == 20 || number == 21 || number == 22){
            sub_total[number] = count[number]*49;
            console.log(sub_total[number]);
        }
        else if(number == 11){
            sub_total[number] = count[number]*59;
            console.log(sub_total[number]);
        }
        else if(number == 12){
            sub_total[number] = count[number]*79;
            console.log(sub_total[number]);
        }
        else if(number == 14){
            sub_total[number] = count[number]*8;
            console.log(sub_total[number]);
        }
        else if(number == 15){
            sub_total[number] = count[number]*39;
            console.log(sub_total[number]);
        }
        else if(number == 18){
            sub_total[number] = count[number]*249;
            console.log(sub_total[number]);
        }
        else if(number == 19){
            sub_total[number] = count[number]*349;
            console.log(sub_total[number]);
        }
        else if(number == 23){
            sub_total[number] = count[number]*129;
            console.log(sub_total[number]);
        }
        else if(number == 24 || number == 25){
            sub_total[number] = count[number]*149;
            console.log(sub_total[number]);
        }
        no_of_item[number].innerHTML = count[number];
        var sum_of_total = 0;
        var sum_of_quant = 0;
        for(var j = 1; j<=25; j++){
           sum_of_total = sum_of_total + sub_total[j];
           sum_of_quant = sum_of_quant + count[j];
           console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
           console.log(sum_of_quant);//TOTAL QUANTITY TO BE PRINTED ON BILL
           console.log(count[j]);//QUANTITY OF SEPARATE CLOTHES
           console.log(sub_total[j]);//PRICE OF SEPARATE CLOTHES
        }
        total.innerHTML = sum_of_total;
        total_item.innerHTML = sum_of_quant;
        console.log(sum_of_total);
        sessionStorage.setItem("sum_of_total2", sum_of_total);
        console.log(sum_of_quant);
        sessionStorage.setItem("sum_of_quant2", sum_of_quant);
        console.log(count);
        sessionStorage.setItem("count2", JSON.stringify(count));
        console.log(sub_total);
        sessionStorage.setItem("sub_total2", JSON.stringify(sub_total));
    })

    document.getElementById("dec"+i).addEventListener("click", function(){
    console.log(this.id);
    var number = this.id.replace(/[a-z]/g,"");
    console.log(number);
    if(count[number] > 0){
    count[number]--;
    }
    console.log(count[number]);
    if(number == 1 || number == 2 || number == 3 || number == 16 || number == 17){
            sub_total[number] = count[number]*15;
            console.log(sub_total[number]);
        }
        else if(number == 4 || number == 13){
            sub_total[number] = count[number]*20;
            console.log(sub_total[number]);
        }
        else if(number == 5){
            sub_total[number] = count[number]*10;
            console.log(sub_total[number]);
        }
        else if(number == 6 || number == 7){
            sub_total[number] = count[number]*65;
            console.log(sub_total[number]);
        }
        else if(number == 8 || number == 9){
            sub_total[number] = count[number]*45;
            console.log(sub_total[number]);
        }
        else if(number == 10 || number == 20 || number == 21 || number == 22){
            sub_total[number] = count[number]*49;
            console.log(sub_total[number]);
        }
        else if(number == 11){
            sub_total[number] = count[number]*59;
            console.log(sub_total[number]);
        }
        else if(number == 12){
            sub_total[number] = count[number]*79;
            console.log(sub_total[number]);
        }
        else if(number == 14){
            sub_total[number] = count[number]*8;
            console.log(sub_total[number]);
        }
        else if(number == 15){
            sub_total[number] = count[number]*39;
            console.log(sub_total[number]);
        }
        else if(number == 18){
            sub_total[number] = count[number]*249;
            console.log(sub_total[number]);
        }
        else if(number == 19){
            sub_total[number] = count[number]*349;
            console.log(sub_total[number]);
        }
        else if(number == 23){
            sub_total[number] = count[number]*129;
            console.log(sub_total[number]);
        }
        else if(number == 24 || number == 25){
            sub_total[number] = count[number]*149;
            console.log(sub_total[number]);
        }
        no_of_item[number].innerHTML = count[number];
        var sum_of_total = 0;
        var sum_of_quant = 0;
        for(var j = 1; j<=25; j++){
           sum_of_total = sum_of_total + sub_total[j];
           sum_of_quant = sum_of_quant + count[j];
           console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
           console.log(sum_of_quant);//TOTAL QUANTITY TO BE PRINTED ON BILL
           console.log(count[j]);//QUANTITY OF SEPARATE CLOTHES
           console.log(sub_total[j]);//PRICE OF SEPARATE CLOTHES
        }
        total.innerHTML = sum_of_total;
        total_item.innerHTML = sum_of_quant;
        console.log(sum_of_total);
        sessionStorage.setItem("sum_of_total2", sum_of_total);
        console.log(sum_of_quant);
        sessionStorage.setItem("sum_of_quant2", sum_of_quant);
        console.log(count);
        sessionStorage.setItem("count2", JSON.stringify(count));
        console.log(sub_total);
        sessionStorage.setItem("sub_total2", JSON.stringify(sub_total));
})
}

document.getElementById("gocart").addEventListener("click", function(){
    window.location = "mycart.html";
})
