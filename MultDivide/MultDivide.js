var NumberOne = prompt ("Enter a number: ", "1");

var NumberTwo = prompt ("Enter another number: ", "2");

var Multiply_or_Divide = prompt("Multiply or Divide?", "*");

//if (Multiply_or_Divide === "Multiply" || "*") {
//    var mult_output = NumberOne*NumberTwo;
//    alert(mult_output);
//} else if (Multiply_or_Divide === "Divide" || "/") {
//    var div_output = NumberOne/NumberTwo;
//    alert(div_output);
//}
//else {
//    alert("You either didn't enter a number or select multiply or divide");
//}

while(Multiply_or_Divide == "*"){
    var mult_output = NumberOne*NumberTwo;
    alert(mult_output);
    break;
}

while(Multiply_or_Divide == "/"){
    var div_output = (NumberOne)/(NumberTwo);
    alert(div_output);
    break;
}
