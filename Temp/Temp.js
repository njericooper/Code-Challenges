function convertC (id, temp){
    temp = parseFloat(temp);
    var celcius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");
   fahrenheit.value =  ((temp*1.8)+32).toFixed(2);
 
}

function convertF (id, temp){
    temp = parseFloat(temp);
    var celcius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");
    celsius.value =  ((temp-32)/1.8).toFixed(2);
 
}

///Kinda Works
//function convert (id, temp){
//    temp = parseFloat(temp);
//    var celcius = document.getElementById("celsius");
//    var fahrenheit = document.getElementById("fahrenheit");

//    fahrenheit.value =  ((temp*1.8)+32).toFixed(1);

 
//}
